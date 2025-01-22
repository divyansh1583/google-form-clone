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
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="container">
  <mat-card class="mb-4">
    <mat-card-header>
      <img src="https://ui.angular-material.dev/app-ui/logo.svg" alt="Logo" height="48" width="48" class="me-2">
      <mat-card-title>Sign in</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <div class="row">
        <div class="col-md-6">
          <p>to continue to Application</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <mat-form-field appearance="fill" class="mb-3">
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email">
            <mat-error *ngIf="(form.get('email')?.touched || form.get('email')?.dirty) && form.get('email')?.hasError('required')">
              <mat-icon class="form-field-error-icon">error</mat-icon>
              Email is required
            </mat-error>
            <mat-error *ngIf="(form.get('email')?.touched || form.get('email')?.dirty) && form.get('email')?.hasError('email')">
              <mat-icon class="form-field-error-icon">error</mat-icon>
              Email is invalid
            </mat-error>
          </mat-form-field>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <mat-form-field appearance="fill" class="mb-3">
            <mat-label>Password</mat-label>
            <input matInput type="password" formControlName="password">
            <mat-error *ngIf="(form.get('password')?.touched || form.get('password')?.dirty) && form.get('password')?.hasError('required')">
              <mat-icon class="form-field-error-icon">error</mat-icon>
              Password is required
            </mat-error>
            <mat-error *ngIf="(form.get('password')?.touched || form.get('password')?.dirty) && form.get('password')?.hasError('minlength')">
              <mat-icon class="form-field-error-icon">error</mat-icon>
              Password must be at least 8 characters
            </mat-error>
          </mat-form-field>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <a mat-button>Forgot password?</a>
        </div>
      </div>
    </mat-card-content>
    <mat-card-actions align="end">
      <a mat-button>Create account</a>
      <button mat-raised-button color="primary" type="submit">Sign in</button>
    </mat-card-actions>
  </mat-card>
</form>

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

