import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminSettings } from './admin-settings/admin-settings';
import { AdminUsers } from './admin-users/admin-users';
const routes: Routes = [

  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: AdminDashboard
  },
  {
    path: 'users',
    component: AdminUsers
  },
  {
    path: 'settings',
    component: AdminSettings
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
