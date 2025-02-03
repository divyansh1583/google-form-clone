import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  imports: [RouterModule, HeaderComponent],
  template: `
  <app-form-header></app-form-header>
<router-outlet></router-outlet>
  `,
  styles: ``
})
export class FormComponent {

}
