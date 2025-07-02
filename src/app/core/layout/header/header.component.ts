import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatTooltipModule, MatIconModule, MatMenuModule, MatDividerModule, CommonModule],
  template: `
    <mat-toolbar class="header-container">
      <span>Form Builder</span>
      <span class="example-spacer"></span>
      
      @if (authService.isAuthenticated()) {
        <!-- User Profile Section -->
        <div class="user-profile" [matMenuTriggerFor]="userMenu">
          <img 
            [src]="authService.currentUser()?.photoURL || '/assets/default-avatar.svg'" 
            [alt]="authService.currentUser()?.displayName || 'User'"
            class="avatar"
            onerror="this.src='/assets/default-avatar.svg'"
          />
          <span class="user-name">{{ getUserDisplayName() }}</span>
          <mat-icon>arrow_drop_down</mat-icon>
        </div>
        
        <mat-menu #userMenu="matMenu">
          <button mat-menu-item>
            <mat-icon>person</mat-icon>
            <span>Profile</span>
          </button>
          <button mat-menu-item>
            <mat-icon>settings</mat-icon>
            <span>Settings</span>
          </button>
          <mat-divider></mat-divider>
          <button mat-menu-item (click)="logout()">
            <mat-icon>logout</mat-icon>
            <span>Sign Out</span>
          </button>
        </mat-menu>
      } @else {
        <!-- Guest Navigation -->
        <a mat-button routerLink="/login">Login</a>
        <a mat-button routerLink="/register">Register</a>
      }
      
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
    
    .user-profile {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      padding: 8px 12px;
      border-radius: 8px;
      transition: background-color 0.2s ease;
    }
    
    .user-profile:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.2);
      background-color: #f0f0f0;
    }
    
    .user-name {
      font-size: 14px;
      font-weight: 500;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    @media (max-width: 600px) {
      .user-name {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  isDarkTheme = false;
  authService = inject(AuthService);

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

