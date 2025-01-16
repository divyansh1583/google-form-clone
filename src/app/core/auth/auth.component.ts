import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [HeaderComponent,RouterOutlet],
  template: `
    <app-header></app-header>
    <main class="container-fluid">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `,
  styles: ``
})
export class AuthComponent {

}
