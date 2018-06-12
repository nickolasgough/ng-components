import { Component } from '@angular/core';
import { NgNavButton } from './ng-side-nav-module/ng-nav-button/ng-nav-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  navButtons: NgNavButton[] = [
    new NgNavButton('home', 'Home', () => window.alert('You went home!')),
    new NgNavButton('menu', 'Menu', () => window.alert('You went menu!')),
    new NgNavButton('back', 'Back', () => window.alert('You went back!')),
  ];
}
