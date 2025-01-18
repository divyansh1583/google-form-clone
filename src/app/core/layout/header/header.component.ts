import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatTooltipModule, MatIconModule],
  template: `
    <mat-toolbar class="header-container">
      <span>Form Builder</span>
      <span class="example-spacer"></span>
      <a mat-button routerLink="/login">Login</a>
      <a mat-button routerLink="/register">Register</a>
      <button mat-icon-button class="theme-toggle" aria-label="Switch to dark theme" 
        [matTooltip]="isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'"
        (click)="toggleTheme()">
        <mat-icon>{{ isDarkTheme ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [`
    .example-spacer {
      flex: 1 1 auto;
    }
  `]
})
export class HeaderComponent {
  isDarkTheme = false;

  constructor() {
    // Check for user preference or system preference here
    // For simplicity, we'll toggle based on a click event
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }
}

