import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Posts } from './posts/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Posts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fetch-asyncpipe-postviewer');
}
