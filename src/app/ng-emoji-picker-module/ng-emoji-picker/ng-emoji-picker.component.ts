import { Component, OnInit } from '@angular/core';
import { EMOJI_DATA } from './emoji-data';

@Component({
  selector: 'ng-emoji-picker',
  templateUrl: './ng-emoji-picker.component.html',
  styleUrls: ['./ng-emoji-picker.component.scss']
})
export class NgEmojiPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  groups(): string[] {
    return Object.keys(EMOJI_DATA);
  }

  emojies(group: string): any[] {
    const emojies: any[] = [];
    const subgroups = EMOJI_DATA[group];
    for (const subgroup in subgroups) {
      emojies.push(...subgroups[subgroup]);
    }
    return emojies;
  }

}
