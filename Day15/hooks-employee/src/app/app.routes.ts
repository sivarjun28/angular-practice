import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { EmployeeDashboard } from './components/employee-dashboard/employee-dashboard';
export const routes: Routes = [

    {
        path: '',
        component: Home
    },
    {
        path:'employee-dashboard',
        component: EmployeeDashboard
    },
];
