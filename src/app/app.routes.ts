import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
