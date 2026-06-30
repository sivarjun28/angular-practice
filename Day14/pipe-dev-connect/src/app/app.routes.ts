import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PipesDemo } from './pages/pipes-demo/pipes-demo';
export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path:'pipes-demo',
        component: PipesDemo
    },
    
];
