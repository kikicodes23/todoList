import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/shared/navbar/navbar.component";
import { ScrollTopComponent } from "./components/shared/scroll-top/scroll-top.component";
import { FooterComponent } from "./components/shared/footer/footer.component";

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [RouterOutlet, Navbar, ScrollTopComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todoList');
}
