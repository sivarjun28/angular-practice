import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-filter',
  imports: [CommonModule],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.scss',
})
export class TaskFilter {
  constructor(private taskService: TaskService){}

  setFilter(filter: string){
    this.taskService.setFilter(filter)
  }
}
