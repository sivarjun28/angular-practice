import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {

  constructor(
    private taskService: TaskService
  ) { }
  title = '';

  priority: 'High' | 'Medium' | 'Low' = 'Medium';


  addTask() {

    if (!this.title.trim()) {
      return;
    }

    const task: Task = {
      id: Date.now(),
      title: this.title,
      priority: this.priority,
      completed: false,
      isFavorite: false
    };

    this.taskService.addTask(task);

    this.title = '';
    this.priority = 'Medium';
  }
}
