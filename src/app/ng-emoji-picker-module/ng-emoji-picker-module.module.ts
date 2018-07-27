import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgEmojiPickerComponent } from './ng-emoji-picker/ng-emoji-picker.component';
import { NgOverlayModule } from '../ng-overlay-module/ng-overlay.module';
import { MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,

    MatButtonModule,
    NgOverlayModule
  ],
  exports: [
    NgEmojiPickerComponent
  ],
  declarations: [
    NgEmojiPickerComponent
  ]
})

export class NgEmojiPickerModuleModule { }
