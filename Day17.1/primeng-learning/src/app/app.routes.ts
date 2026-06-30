import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Searching } from './components/searching/searching';
import { Table } from './components/table/table';
import { Dashboard } from './components/dashboard/dashboard';
import { Forms } from './components/forms/forms';
import { Gallery } from './components/gallery/gallery';
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'searching', component: Searching },
    { path: 'gallery', component: Gallery },
    { path: 'forms', component: Forms },
    { path: 'table', component: Table },
    { path: 'dashboard', component: Dashboard }
];
