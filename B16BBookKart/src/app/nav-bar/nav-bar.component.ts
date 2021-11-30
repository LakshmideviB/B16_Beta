import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  badgeCount: number;
  badgeeCount: number;

  constructor() {
    this.badgeCount = 1;
    this.badgeeCount = 1;
  }

  incrementCount() {
    this.badgeCount++;
  }
  decrementCount() {
    this.badgeCount--;
  }


  incrementtCount() {
    this.badgeeCount++;
  }
  decrementtCount() {
    this.badgeeCount--;
  }

}
