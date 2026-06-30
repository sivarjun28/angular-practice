import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {

  favoriteTasks$: Observable<Task[]>

  constructor(private taskService: TaskService) {
    this.favoriteTasks$ = this.taskService.tasks$
      .pipe(map(tasks =>
        tasks.filter(task => task.isFavorite)
      ));
  }
}
