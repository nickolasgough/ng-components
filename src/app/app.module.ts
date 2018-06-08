import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSideNavComponent } from './ng-side-nav/ng-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSideNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
