import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent],
  template: `
    <app-header/>
    
  `,
  styles: ``
})
export class LayoutComponent {

}
