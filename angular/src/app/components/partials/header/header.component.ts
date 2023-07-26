import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  nav: boolean = false;
  menuType: string = 'default';
  adminName: string = '';
  userName: string = '';
  cartItems=0
  handleNav() {
    this.nav = !this.nav;
  }

  adminLogout(){

  }
  userLogout(){

  }
}
