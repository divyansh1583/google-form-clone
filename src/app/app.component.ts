import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
         <router-outlet/> 
  `,
  styles: [`

  `]
})
export class AppComponent {
 matIconRegistry = inject(MatIconRegistry);

 constructor() {
  this.matIconRegistry.setDefaultFontSetClass('material-icons-outlined');
 }
}

