import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
const routes: Routes = [
  {
     path: '', redirectTo: 'profile', pathMatch: 'full'
  },
  {
    path: 'profile',
    component: UserProfile
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
