import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ng-emoji-parser',
  templateUrl: './ng-emoji-parser.component.html',
  styleUrls: ['./ng-emoji-parser.component.scss']
})

export class NgEmojiParserComponent implements OnInit {

  private GROUP_SEPARATOR = '# group: ';
  private SUBGROUP_SEPARATOR = '# subgroup: ';

  constructor() { }

  ngOnInit() {
  }

  handleFile(file: File): void {
    const fileReader: FileReader = new FileReader();
    fileReader.onload = () => {
      const lines: string[] = fileReader.result.split('\n');
      const emojiData = {};

      let group: string = null;
      let subgroup: string = null;

      for (let n = 0; n < lines.length; n += 1) {
        const line = lines[n];
        if (!line) { continue; }

        if (this.isGroupLine(line)) {
          group = this.extractGroup(line);
          if (!emojiData[group]) {
            emojiData[group] = {};
          }
        } else if (this.isSubgroupLine(line)) {
          subgroup = this.extractSubgroup(line);
          if (!emojiData[group][subgroup]) {
            emojiData[group][subgroup] = [];
          }
        } else if (line.length <= 0 || line.startsWith('#')) {
          continue;
        } else {
          if (!this.isFullyQualified(line)) {
            continue;
          }
          const emoji = {
            'emoji': this.extractEmoji(line),
            'codePoints': this.extractCodePoints(line),
            'description': this.extractDescription(line),
            'selector': this.extractSelector(line),
            'skinTone': this.extractSkinTone(line)
          };
          emojiData[group][subgroup].push(emoji);
        }
      }

      this.downloadJSONFile(emojiData);
    };
    fileReader.readAsText(file);
  }

  private isGroupLine(line: string): boolean {
    return line.startsWith(this.GROUP_SEPARATOR);
  }

  private extractGroup(line: string): string {
    return line.substring(this.GROUP_SEPARATOR.length).toLocaleLowerCase();
  }

  private isSubgroupLine(line: string): boolean {
    return line.startsWith(this.SUBGROUP_SEPARATOR);
  }

  private extractSubgroup(line: string): string {
    return line.substring(this.SUBGROUP_SEPARATOR.length).toLocaleLowerCase();
  }

  private isFullyQualified(line: string): boolean {
    return line.indexOf('fully-qualified') >= 0 && line.indexOf('non-fully-qualified') < 0;
  }

  private extractCodePoints(line: string): string[] {
    return line.split(';')[0].trim().split(' ');
  }

  private splitDescription(line: string): string {
    const description: string = line.split(';')[1].split('#')[1].trim();
    const descriptionParts: string[] = description.split(' ');
    descriptionParts.splice(0, 1);
    return descriptionParts.join(' ');
  }

  private extractDescription(line: string): string {
    const description: string = this.splitDescription(line);
    if (line.indexOf('skin tone') < 0) {
      return description;
    }

    return description.split(':')[0];
  }

  private extractSelector(line: string): string {
    const description = this.extractDescription(line)
      .replace(/:/g, '')
      .replace(/,/g, '');
    return ':' + description.split(' ').join('-') + ':';
  }

  private extractEmoji(line: string): string {
    const codePoints: string[] = this.extractCodePoints(line);
    return String.fromCodePoint(...codePoints.map(
      codePoint => parseInt(codePoint, 16)
    ));
  }

  private extractSkinTone(line: string): string {
    if (line.indexOf('skin tone') < 0) {
      return '';
    }

    const descriptionParts: string[] = this.splitDescription(line).split(':');
    return descriptionParts.length > 1 ? descriptionParts[1].trim().split(' ')[0] : '';
  }

  private writeJSONFile(emojiData: {}): Blob {
    const json = JSON.stringify(emojiData, null, 2);
    return new Blob([json], {type: 'text/json'});
  }

  private downloadFile(blob: Blob, extension: string): void {
    const a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.href = window.URL.createObjectURL(blob);
    a.download = 'emoji-data' + extension;
    a.click();
  }

  private downloadJSONFile(emojiData: {}): void {
    const blob: Blob = this.writeJSONFile(emojiData);
    this.downloadFile(blob, '.json');
  }

}
