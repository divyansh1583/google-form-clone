import { Routes } from '@angular/router';

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
