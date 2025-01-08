import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, RouterLink],
  template: `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Register</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
              <div class="row">
                <div class="col-12 mb-3">
                  <mat-form-field appearance="outline" class="w-100">
                    <mat-label>Name</mat-label>
                    <input matInput formControlName="name" required>
                  </mat-form-field>
                </div>
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
                <div class="col-12 mb-3">
                  <mat-form-field appearance="outline" class="w-100">
                    <mat-label>Confirm Password</mat-label>
                    <input matInput formControlName="confirmPassword" type="password" required>
                  </mat-form-field>
                </div>
                <div class="col-12">
                  <button mat-raised-button color="primary" type="submit" [disabled]="registerForm.invalid" class="w-100">Register</button>
                </div>
              </div>
            </form>
          </mat-card-content>
          <mat-card-actions>
            <div class="row">
                  <a routerLink="/login" class="w-100 text-centerv d-block" >Already have an account? Login</a>
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
  `]
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: any) {
    return g.get('password').value === g.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // TODO: Implement registration logic
      console.log(this.registerForm.value);
    }
  }
}

