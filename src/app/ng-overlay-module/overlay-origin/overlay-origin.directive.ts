import { Directive, Input } from '@angular/core';

import { NgOverlayComponent } from '../ng-overlay/ng-overlay.component';


@Directive({
  selector: '[overlayOriginFor]'
})

export class OverlayOriginDirective {

  @Input() overlayOriginFor: NgOverlayComponent;

  constructor() { }

}
