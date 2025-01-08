import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  template: `
    <div class="auth-container">
      <h2>Login</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" type="email" required>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Password</mat-label>
          <input matInput formControlName="password" type="password" required>
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit" [disabled]="loginForm.invalid">Login</button>
      </form>
      <div class="auth-links">
        <a routerLink="/forgot-password">Forgot Password?</a>
        <a routerLink="/register">Don't have an account? Register</a>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      max-width: 400px;
      margin: 2rem auto;
      padding: 2rem;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .auth-links {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `]
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // TODO: Implement login logic
      console.log(this.loginForm.value);
    }
  }
}

