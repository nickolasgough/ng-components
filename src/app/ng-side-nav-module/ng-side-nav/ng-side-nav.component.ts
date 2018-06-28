import { Component, Input, OnInit } from '@angular/core';

import { NgNavButton } from '../ng-nav-button/ng-nav-button';


@Component({
  selector: 'ng-side-nav',
  templateUrl: './ng-side-nav.component.html',
  styleUrls: ['./ng-side-nav.component.scss'],
})

export class NgSideNavComponent {

  @Input() navButtons: NgNavButton[];

  constructor() {}

}
