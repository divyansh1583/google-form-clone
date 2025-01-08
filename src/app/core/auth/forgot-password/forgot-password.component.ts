import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  template: `
    <div class="auth-container">
      <h2>Forgot Password</h2>
      <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" type="email" required>
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit" [disabled]="forgotPasswordForm.invalid">Reset Password</button>
      </form>
      <div class="auth-links">
        <a routerLink="/login">Remember your password? Login</a>
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
export class ForgotPasswordComponent {
  forgotPasswordForm:FormGroup;
  
  constructor(private fb: FormBuilder) {
    
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      // TODO: Implement password reset logic
      console.log(this.forgotPasswordForm.value);
    }
  }
}

