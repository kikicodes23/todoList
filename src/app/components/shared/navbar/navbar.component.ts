import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    ThemeToggleComponent
  ],
  templateUrl: './navbar.component.html',
})
export class Navbar {

}
