import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule,
} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule
  ],
  template: `
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-4">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Login</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
              <div class="row">
                <div class="col-12 mb-3">
                  <mat-form-field appearance="outline" class="w-100">
                    <mat-label>Email</mat-label>
                    <input matInput formControlName="email" type="email" required>
                  </mat-form-field>
                </div>
                <div class="col-12 mb-3">
                  <mat-form-field appearance="outline" class="w-100">
                    <mat-label>Password</mat-label>
                    <input matInput formControlName="password" type="password" required>
                  </mat-form-field>
                </div>
                <div class="col-12">
                  <button mat-raised-button color="primary" type="submit" [disabled]="loginForm.invalid" class="w-100">Login</button>
                </div>
              </div>
            </form>
          </mat-card-content>
          <mat-card-actions>
            <div class="row">
              <div class="col-12 mb-2">
                <a routerLink="/forgot-password" class="w-100 text-center d-block">Forgot Password?</a>
              </div>
              <div class="col-12">
                <a routerLink="/register" class="w-100 text-center d-block">Don't have an account? Register</a>
              </div>
            </div>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}

