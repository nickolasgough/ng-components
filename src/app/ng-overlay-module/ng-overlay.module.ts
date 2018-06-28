import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOverlayComponent } from './ng-overlay/ng-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayOriginDirective } from './overlay-origin/overlay-origin.directive';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,

    OverlayModule
  ],
  exports: [
    NgOverlayComponent,
    OverlayOriginDirective
  ]
  ,
  declarations: [
    NgOverlayComponent,
    OverlayOriginDirective,
  ]
})

export class NgOverlayModule { }
