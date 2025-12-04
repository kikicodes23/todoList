import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    MatTabsModule
  ],
  templateUrl: './navbar.component.html',
})
export class Navbar {

}
