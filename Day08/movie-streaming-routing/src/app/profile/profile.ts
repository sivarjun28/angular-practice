import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  username = 'Sivarjun';

  bio =
  'Angular Developer & Movie Enthusiast';

  followers = 1200;

  following = 340;

  posts = 89;

  isFollowing = false;

  profileImage =
  'assets/profile/profile.jpg';

  socialLinks = [

    {
      platform: 'Instagram',
      username: '@sivarjun'
    },

    {
      platform: 'GitHub',
      username: 'sivarjun28'
    },

    {
      platform: 'LinkedIn',
      username: 'Sivarjun'
    }

  ];

  toggleFollow(){

    this.isFollowing = !this.isFollowing;

    if(this.isFollowing){

      this.followers++;

    }else{

      this.followers--;
    }
  }
}