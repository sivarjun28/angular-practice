import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-input.html',
  styleUrls: ['./todo-input.scss']
})
export class TodoInput {

  task: string = '';

  tasks: string[] = [];

  addTask() {

    if (this.task.trim()) {

      this.tasks.push(this.task);

      this.task = '';
    }
  }

  clearTasks() {
    this.tasks = [];
  }
}