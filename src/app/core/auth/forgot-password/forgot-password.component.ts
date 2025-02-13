import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, RouterLink],
  template: `
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-6">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Forgot Password</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()">
              <div class="row">
                <div class="col-12 mb-3">
                  <mat-form-field appearance="outline" class="w-100">
                    <mat-label>Email</mat-label>
                    <input matInput formControlName="email" type="email" required>
                  </mat-form-field>
                </div>
                <div class="col-12">
                  <button mat-raised-button color="primary" type="submit" [disabled]="forgotPasswordForm.invalid" class="w-100">Reset Password</button>
                </div>
              </div>
            </form>
          </mat-card-content>
          <mat-card-actions>
            <div class="row">
              <div class="col-12">
                <a routerLink="/login" class="w-100 text-center d-block">Remember your password? Login</a>
              </div>
            </div>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    mat-card {
      margin-bottom: 2rem;
    }
    mat-card-header {
      margin-bottom: 1rem;
    }
    mat-card-actions {
      justify-content: space-around;
    }
  `]
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      // TODO: Implement password reset logic
      // console.log(this.forgotPasswordForm.value);
    }
  }
}

