import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';

import { NgOverlayComponent } from '../ng-overlay/ng-overlay.component';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';


@Directive({
  selector: '[overlayOriginFor]'
})

export class OverlayOriginDirective implements OnInit, AfterViewInit{

  @Input() overlayOriginFor: NgOverlayComponent;

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {
    this.overlayOriginFor.origin = this as CdkOverlayOrigin;
  }

  ngAfterViewInit(): void {
    this.overlayOriginFor.determinePosition(this.elementRef.nativeElement.offsetY);
  }

}
