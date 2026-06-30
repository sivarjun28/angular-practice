import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {

  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {

    this.tasks$ = combineLatest([
      this.taskService.tasks$,
      this.taskService.filter$
    ]).pipe(

      map(([tasks, filter]) => {

        switch (filter) {

          case 'completed':
            return tasks.filter(
              task => task.completed
            );

          case 'pending':
            return tasks.filter(
              task => !task.completed
            );

          case 'favorite':
            return tasks.filter(
              task => task.isFavorite
            );

          default:
            return tasks;
        }

      })

    );

  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  toggleComplete(id: number) {
    this.taskService.toggleComplete(id);
  }

  toggleFavorite(id: number) {
    this.taskService.toggleFavorite(id);
  }

}