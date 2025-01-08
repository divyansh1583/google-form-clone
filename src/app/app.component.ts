import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
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
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
    main {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  `]
})
export class AppComponent {}

