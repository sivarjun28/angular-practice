import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTask } from './components/add-task/add-task';
import { Favorites } from './components/favorites/favorites';
import { TaskFilter } from './components/task-filter/task-filter';
import { TaskList } from './components/task-list/task-list';
import { UserPanel } from './components/user-panel/user-panel';
import { TaskStats } from './components/task-stats/task-stats';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTask, Favorites, TaskFilter, TaskList, UserPanel, TaskStats],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('state-management');
}
