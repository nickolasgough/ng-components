import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';


@Component({
  selector: 'ng-file-uploader',
  templateUrl: './ng-file-uploader.component.html',
  styleUrls: ['./ng-file-uploader.component.scss']
})

export class NgFileUploaderComponent implements OnInit {

  @Output() file: EventEmitter<File> = new EventEmitter<File>();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('dragstart', ['$event']) onDragStart(event: DragEvent): void { event.preventDefault(); }
  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void { event.preventDefault(); }
  @HostListener('dragend', ['$event']) onDragEnd(event: DragEvent): void { event.preventDefault(); }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.file.emit(event.dataTransfer.files[0]);
  }

}
