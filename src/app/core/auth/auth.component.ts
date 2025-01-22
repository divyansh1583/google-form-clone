import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [HeaderComponent, RouterOutlet],
  template: `
  <header>
    <app-header></app-header>
  </header>
  <main>
    <router-outlet></router-outlet>
  </main>
  `
})
export class AuthComponent {

}
