import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItem {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) { }

  toggle() {
    this.todoService.toggleTodo(this.todo.id);
  }

  delete() {
    this.todoService.deleteTodo(this.todo.id);
  }
}