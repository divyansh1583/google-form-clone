import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col">
            <span>Form Builder</span>
          </div>
          <div class="col-auto">
            <a mat-button routerLink="/login">Login</a>
            <a mat-button routerLink="/register">Register</a>
          </div>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      margin-bottom: 2rem;
    }
  `]
})
export class HeaderComponent {}

