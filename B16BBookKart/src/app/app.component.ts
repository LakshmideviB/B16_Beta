import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  items: any;
  ngOnInit() {
    this.items = [
      { name: 'My Orders', url: '' },
      { name: 'Logout', url: '' },
    ];
  }
}