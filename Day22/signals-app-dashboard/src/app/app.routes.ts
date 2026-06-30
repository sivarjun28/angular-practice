import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { TodoComponent } from './features/todo/todo';
import { Signup } from './features/signup/signup';
import { Search } from './features/search/search';
import { ThemeSwitcher } from './features/theme-switcher/theme-switcher';
import { Wizard } from './features/wizard/wizard';
import { UserApi } from './features/user-api/user-api';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: 'signup',
        component: Signup
    },
    {
        path: 'search',
        component: Search
    },
    {
        path: 'theme',
        component: ThemeSwitcher
    },
    {
        path: 'wizard',
        component: Wizard
    },
    {
        path: 'user',
        component: UserApi
    }

];
