import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    CommonModule,
    MatSidenavModule, MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isDarkTheme = false;
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    // Check for user preference or system preference here
    // For simplicity, we'll toggle based on a click event
  }

  getUserDisplayName(): string {
    const user = this.authService.currentUser();
    return user?.displayName || user?.email?.split('@')[0] || 'User';
  }
  async logout(): Promise<void> {
    try {
      await this.authService.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  navigateToForms(id: number) {
    this.router.navigate(['/forms/edit', id]);
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
