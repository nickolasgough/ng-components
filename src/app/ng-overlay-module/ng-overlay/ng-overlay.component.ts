import { Component, Input, OnInit } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';


@Component({
  selector: 'ng-overlay',
  templateUrl: './ng-overlay.component.html',
  styleUrls: ['./ng-overlay.component.scss']
})

export class NgOverlayComponent implements OnInit {

  @Input() origin: CdkOverlayOrigin;

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

}
