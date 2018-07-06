import { Component, ElementRef, Input } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';


@Component({
  selector: 'ng-overlay',
  templateUrl: './ng-overlay.component.html',
  styleUrls: ['./ng-overlay.component.scss']
})

export class NgOverlayComponent {

  @Input() origin: CdkOverlayOrigin;
  @Input() isOpen = false;

  constructor() {}

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

}


