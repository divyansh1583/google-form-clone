import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: '',
    //     loadComponent: () => import('./core/auth/auth.component').then(m => m.AuthComponent),
    //     children: [
    //         {
    //             path: 'login',
    //             loadComponent: () => import('./core/auth/login/login.component').then(m => m.LoginComponent)
    //         },
    //         {
    //             path: 'register',
    //             loadComponent: () => import('./core/auth/register/register.component').then(m => m.RegisterComponent)
    //         },
    //         {
    //             path: 'forgot-password',
    //             loadComponent: () => import('./core/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
    //         },
    //     ]
    // },
    // {
    //     path: '',
    //     loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent),
    //     children: [
    //         {
    //             path: 'dashboard',
    //             loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
    //         },
    //     ]
    // },
    {
        path: 'forms',
        loadComponent: () => import('./features/form/form.component').then(m => m.FormComponent),
        children: [
            {
                path: 'edit/:id',
                loadComponent: () => import('./features/form/pages/form-creation/form-creation.component').then(m => m.FormCreationComponent)
            },
        ]
    },
    { path: '', redirectTo: '/forms/edit/0', pathMatch: 'full' },
];
