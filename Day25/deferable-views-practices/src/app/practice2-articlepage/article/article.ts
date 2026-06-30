import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [CommonModule],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article{
 comments: string[] = [
  'Great article!',
  'Very helpful',
  'Nice explanation Angular 👍'
];

recommendations: string[] = [
  'Understanding Angular Signals',
  'Lazy Loading in Angular',
  'RxJS Deep Dive'
];

}
