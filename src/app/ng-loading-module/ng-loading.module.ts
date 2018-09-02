import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLoadingComponent } from './ng-loading/ng-loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    NgLoadingComponent
  ],
  declarations: [
    NgLoadingComponent
  ]
})

export class NgLoadingModule { }
