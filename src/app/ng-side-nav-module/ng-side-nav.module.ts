import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { NgSideNavComponent } from './ng-side-nav/ng-side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    NgSideNavComponent,
  ],
  declarations: [
    NgSideNavComponent,
  ]
})

export class NgSideNavModule { }
