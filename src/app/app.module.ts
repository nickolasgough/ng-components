import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSideNavModule } from './ng-side-nav-module/ng-side-nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NgSideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
