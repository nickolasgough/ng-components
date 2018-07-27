import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgEmojiParserComponent } from './ng-emoji-parser.component';
import { NgFileUploaderModule } from '../ng-file-uploader/ng-file-uploader.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,

    NgFileUploaderModule
  ],
  exports: [
    NgEmojiParserComponent,
  ],
  declarations: [
    NgEmojiParserComponent,
  ]
})

export class NgEmojiParserModule { }
