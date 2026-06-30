import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  profileImage: string = 
      'https://i.pravatar.cc/300';

  name: string = "pravatar";
  bio: string = "Content creator"

  isFollowing: boolean = false;

  followers: number = 1200;
  following: number = 300;
  posts: number = 45;

  socialLinks = [
    'Instagram',
    'LinkedIn',
    'GitHub'
  ]

  toggleFollow(){
    this.isFollowing = !this.isFollowing;

    if(this.isFollowing){
      this.followers++;
    }else{
      this.followers--;
    }
  }
}
