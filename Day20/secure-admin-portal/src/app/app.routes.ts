import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth-guard';

import { Login } from './pages/login/login';

import { Dashboard } from './pages/dashboard/dashboard';

import { Profile } from './pages/profile/profile';
import { EditProfile } from './pages/edit-profile/edit-profile';
import { unsavedChangesGuard } from './core/guards/unsaved-changes-guard';
import { roleGuard } from './core/guards/role-guard';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    },

    {
        path: 'profile',
        component: Profile,
        canActivate: [authGuard]
    },

    {
        path: 'edit-profile',
        component: EditProfile,
        canActivate:[authGuard],
        canDeactivate:[unsavedChangesGuard]
    },
    {
        path: 'admin',
        component: Admin,
        canActivate: [authGuard, roleGuard],
        data: { role: 'admin' }
    },
    {
        path: '**',
        redirectTo: 'login'
    }

];