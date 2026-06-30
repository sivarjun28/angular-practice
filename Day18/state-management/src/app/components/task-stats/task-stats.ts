import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-stats',
  imports: [CommonModule],
  templateUrl: './task-stats.html',
  styleUrl: './task-stats.scss',
})
export class TaskStats {
  totalTasks$: Observable<number>;

  constructor(private taskService: TaskService) {
    this.totalTasks$ = this.taskService.tasks$
      .pipe(
        map(tasks => tasks.length)
      );
  }

}
