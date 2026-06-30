import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../../models/feed.model';

@Component({
  selector: 'app-social-feed',
  imports: [CommonModule],
  templateUrl: './social-feed.html',
  styleUrl: './social-feed.scss',
})
export class SocialFeed {
  posts: Post[] = [
    { id: 1, user: 'Arjun', content: 'Hello world!' },
    { id: 2, user: 'John', content: 'Angular is awesome', hasVideo: true },
    { id: 3, user: 'Sara', content: 'Learning defer blocks 🚀' },
    { id: 4, user: 'Sameer', content: 'Learning  blocks' }
  ]

   morePosts: Post[] = [
    { id: 4, user: 'Mike', content: 'New post here' },
    { id: 5, user: 'Anna', content: 'Another update', hasVideo: true }
  ];

  selectedPost: Post | null = null;

  openPost(post: Post){
    this.selectedPost = post;
  }

  closePost(){
    this.selectedPost = null;
  }
}
