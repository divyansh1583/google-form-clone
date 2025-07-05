import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, MatSidenavModule, MatButtonModule],
  template: `
    <app-header />
  `,
  styles: `
    

  `,
})
export class LayoutComponent {

}
