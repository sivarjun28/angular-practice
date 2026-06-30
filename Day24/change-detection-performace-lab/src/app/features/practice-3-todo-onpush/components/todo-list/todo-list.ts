import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { TodoItem } from '../todo-item/todo-item';
import { TodoInput } from '../todo-input/todo-input';

@Component({
  selector: 'app-todo-list',
  imports: [AsyncPipe, CommonModule, TodoItem, TodoInput],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoList {
  todos$
  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todo$

  }
  trackById(index: number, item: any) {
    return item.id;
  }
}
