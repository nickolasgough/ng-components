import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSideNavModule } from './ng-side-nav-module/ng-side-nav.module';
import { NgOverlayModule } from './ng-overlay-module/ng-overlay.module';
import { MatButtonModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgEmojiParserModule } from './ng-emoji-parser-module/ng-emoji-parser.module';
import { NgFileUploaderComponent } from './ng-file-uploader-module/ng-file-uploader/ng-file-uploader.component';
import { NgFileUploaderModule } from './ng-file-uploader-module/ng-file-uploader.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    OverlayModule,

    NgSideNavModule,
    NgOverlayModule,
    NgEmojiParserModule,
    NgFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
