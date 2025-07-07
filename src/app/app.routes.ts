import { Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';
import { authGuard } from './core/auth/guards/auth.guard';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { FormComponent } from './features/form/form.component';
import { FormCreationComponent } from './features/form/pages/form-creation/form-creation.component';
import { LayoutComponent } from './core/layout/layout.component';
import { redirectAuthenticatedGuard } from './core/auth/guards/redirect-authenticated.guard';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        canActivate: [redirectAuthenticatedGuard],
        children: [
            {path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
        ]
    },
    { 
        path: 'dashboard', 
        component:LayoutComponent,
        //loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        children:[
            {path: '', loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },

        ],
        canActivate: [authGuard]
    },
    {
        path: 'forms', 
        component: FormComponent,
        canActivate: [authGuard], 
        children: [
            { path: 'edit/:id', component: FormCreationComponent },
        ]
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
