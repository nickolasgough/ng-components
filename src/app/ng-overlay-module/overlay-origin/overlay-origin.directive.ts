import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { NgOverlayComponent } from '../ng-overlay/ng-overlay.component';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';


@Directive({
  selector: '[overlayOriginFor]'
})

export class OverlayOriginDirective implements OnInit{

  @Input() overlayOriginFor: NgOverlayComponent;

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {
    this.overlayOriginFor.origin = this as CdkOverlayOrigin;
  }

}
