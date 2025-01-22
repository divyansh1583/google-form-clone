import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, RouterLink],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-8 col-11">
          <mat-card appearance="outlined" class="login-card">
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
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      padding: 1rem;
      box-sizing: border-box;
    }
    .container {
      width: 100%;
      max-width: 1200px;
    }
    .row {
      width: 100%;
      justify-content: center;
      margin: 0;
      flex: 0 1 auto;
    }
    .login-card {
      max-width: 400px;
      margin: 0 auto;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;

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

