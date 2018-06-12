import { Component, Input, OnInit } from '@angular/core';

import { NgNavButton } from '../ng-nav-button/ng-nav-button';


@Component({
  selector: 'ng-side-nav',
  templateUrl: './ng-side-nav.component.html',
  styleUrls: ['./ng-side-nav.component.scss'],
})

export class NgSideNavComponent implements OnInit {

  @Input() navButtons: NgNavButton[];

  private navState: string;
  private textState: string;

  constructor() {}

  ngOnInit() {
    this.navState = 'collapsed';
    this.textState = 'hidden';
  }

  transition(action: string): void {
    if (action === 'enter') {
      this.navState = 'expanded';
      this.textState = 'visible';
    } else {
      this.navState = 'collapsed';
      this.textState = 'hidden';
    }
  }

  get navClass(): {} {
    return {
      'collapsed': this.navState === 'collapsed',
      'expanded': this.navState === 'expanded',
    };
  }

  get textClass(): {} {
    return {
      'hidden': this.textState === 'hidden',
      'visible': this.textState === 'visible',
    };
  }

}
