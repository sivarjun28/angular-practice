import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PostService } from '../services/post';
import { Post } from '../Models/post.interface';


@Component({
  selector: 'app-posts',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './posts.html',

  styleUrls: ['./posts.scss']
})

export class Posts implements OnInit {

  // POSTS

  posts: Post[] = [];

  filteredPosts: Post[] = [];

  // UI STATES

  loading = false;

  error = '';

  // SEARCH

  searchText = '';

  // FORM DATA

  newPost: Partial<Post> = {

    title: '',

    body: '',

    userId: 1

  };

  // EDIT MODE

  editingPostId: number | null = null;

  constructor(
    private postService: PostService
  ) {}

  // INITIAL LOAD

  ngOnInit(): void {

    this.fetchPosts();

  }

  // FETCH POSTS

  fetchPosts(): void {

    this.loading = true;

    this.error = '';

    this.postService.getPosts().subscribe({

      next: (data: Post[]) => {

        this.posts = data;

        this.filteredPosts = [...data];

        this.loading = false;

      },

      error: (err) => {

        console.error(err);

        this.error = err.message;

        this.loading = false;

      }

    });

  }

  // SEARCH POSTS

  searchPosts(): void {

    const search = this.searchText
      .trim()
      .toLowerCase();

    if (!search) {

      this.filteredPosts = [...this.posts];

      return;

    }

    this.filteredPosts = this.posts.filter(post =>

      post.title.toLowerCase().includes(search)

    );

  }

  // CREATE POST

  createPost(): void {

    if (
      !this.newPost.title?.trim() ||
      !this.newPost.body?.trim()
    ) {

      alert('Please fill all fields');

      return;

    }

    this.loading = true;

    this.postService.createPost(this.newPost)
      .subscribe({

        next: (createdPost: Post) => {

          this.posts.unshift(createdPost);

          this.searchPosts();

          this.resetForm();

          this.loading = false;

        },

        error: (err) => {

          console.error(err);

          this.error = err.message;

          this.loading = false;

        }

      });

  }

  // ENABLE EDIT MODE

  editPost(post: Post): void {

    this.editingPostId = post.id;

    this.newPost = {

      title: post.title,

      body: post.body,

      userId: post.userId

    };

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  // UPDATE POST

  updatePost(): void {

    if (!this.editingPostId) return;

    this.loading = true;

    this.postService.updatePost(
      this.editingPostId,
      this.newPost
    ).subscribe({

      next: (updatedPost: Post) => {

        this.posts = this.posts.map(post =>

          post.id === this.editingPostId
            ? updatedPost
            : post

        );

        this.searchPosts();

        this.cancelEdit();

        this.loading = false;

      },

      error: (err) => {

        console.error(err);

        this.error = err.message;

        this.loading = false;

      }

    });

  }

  // DELETE POST

  deletePost(id: number): void {

    const confirmDelete = confirm(
      'Are you sure you want to delete this post?'
    );

    if (!confirmDelete) return;

    this.loading = true;

    this.postService.deletePost(id)
      .subscribe({

        next: () => {

          this.posts = this.posts.filter(
            post => post.id !== id
          );

          this.searchPosts();

          this.loading = false;

        },

        error: (err) => {

          console.error(err);

          this.error = err.message;

          this.loading = false;

        }

      });

  }

  // CANCEL EDIT

  cancelEdit(): void {

    this.editingPostId = null;

    this.resetForm();

  }

  // RESET FORM

  resetForm(): void {

    this.newPost = {

      title: '',

      body: '',

      userId: 1

    };

  }

  // RETRY API

  retry(): void {

    this.fetchPosts();

  }

}