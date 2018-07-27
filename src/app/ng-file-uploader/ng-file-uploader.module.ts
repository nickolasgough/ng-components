import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';

import { NgFileUploaderComponent } from './ng-file-uploader.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,

    MatIconModule
  ],
  exports: [
    NgFileUploaderComponent,
  ],
  declarations: [
    NgFileUploaderComponent,
  ]
})

export class NgFileUploaderModule { }
