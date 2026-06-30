import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  private tasksSubject = new BehaviorSubject<Task[]>([]);

  tasks$ = this.tasksSubject.asObservable();

  addTask(task: Task) {
    this.tasks.push(task);

    console.log('Tasks array:', this.tasks);
    this.tasksSubject.next([...this.tasks])

  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(
      task => task.id !== id
    );

    this.tasksSubject.next(
      [...this.tasks]
    )
  }

  toggleComplete(id: number) {

    this.tasks = this.tasks.map(task =>

      task.id === id

        ? {
          ...task,
          completed: !task.completed
        }

        : task

    );

    this.tasksSubject.next(
      [...this.tasks]
    );

  }

  toggleFavorite(id: number) {
    this.tasks = this.tasks.map(
      task => task.id === id ? {
        ...task, isFavorite: !task.isFavorite
      } : task
    );

    this.tasksSubject.next(
      [...this.tasks]
    )
  }


  private filterSubject = new BehaviorSubject<string>('all');

  filter$ = this.filterSubject.asObservable();

  setFilter(filter: string) {
    this.filterSubject.next(filter);
  }

}
