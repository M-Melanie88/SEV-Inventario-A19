import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/views/login/login.component';
import { HomeComponent } from './pages/dashboard/views/home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: HomeComponent
     },
];
