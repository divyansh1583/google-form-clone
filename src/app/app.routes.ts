import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { FormCreationComponent } from './features/form/pages/form-creation/form-creation.component';
import { AuthComponent } from './core/auth/auth.component';
import { FormComponent } from './features/form/form.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
        ]
    },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'forms', 
        component: FormComponent, 
        children: [
            { path: 'edit/:id', component: FormCreationComponent },
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
