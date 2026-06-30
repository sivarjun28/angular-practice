import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  user = {
    name : 'Admin user',
    email : 'admin@test.com',
    role : 'Admin',
    phone : '1234567890',
    city : 'New York',
  }

  constructor(private route: Router)  { }

  editProfile() : void {
      this.route.navigate(['/edit-profile']);
  }
}
