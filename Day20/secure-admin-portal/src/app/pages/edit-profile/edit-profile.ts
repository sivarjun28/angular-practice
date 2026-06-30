import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../../core/guards/unsaved-changes-guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfile implements CanComponentDeactivate {
  profile = {

    name: 'Admin User',

    email: 'admin@test.com',

    phone: '9876543210',

    city: 'Bengaluru'

  };

  private originalProfile = { ...this.profile };

  constructor(private router: Router) { }


  saveProfile(): void {
    this.originalProfile = { ...this.profile };
    alert('Profile Updated Successfully!');
  }

  goDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  canDeactivate(): boolean {
    const hasChanges =
      JSON.stringify(this.profile) !== JSON.stringify(this.originalProfile);
    if (hasChanges) {
      return confirm('You have unsaved changes. Leave this page?');
    }

    return true;
  }
}
