import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet],
  template: ` 
         <router-outlet></router-outlet>
  `,
  styles: ``
})
export class AuthComponent {

}
