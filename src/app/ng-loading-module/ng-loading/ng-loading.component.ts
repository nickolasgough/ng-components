import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ng-loading',
  templateUrl: './ng-loading.component.html',
  styleUrls: ['./ng-loading.component.scss']
})

export class NgLoadingComponent implements OnInit {

  @Input() width = 25;

  style: {width: string, height: string, margin: string};

  constructor() { }

  ngOnInit() {
    this.style = {
      height: `${this.width}px`,
      width: `${this.width}px`,
      margin: `${this.width / 5}px`
    };
  }

}
