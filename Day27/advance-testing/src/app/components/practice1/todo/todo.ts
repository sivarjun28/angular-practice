import { Component, signal } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl:'./todo.html' ,
  styleUrl: './todo.scss'
})
export class TodoComponent {
  todos;
  constructor(private todoService: TodoService) {
    this.todos = signal(this.todoService.getTodos());
  }
  add(title: string) {
    this.todoService.addTodo(title);
    this.todos.set(this.todoService.getTodos());
  }

  toggle(id: number) {
    this.todoService.toggleTodo(id);
    this.todos.set(this.todoService.getTodos());
  }

  delete(id: number) {
    this.todoService.deleteTodo(id);
    this.todos.set(this.todoService.getTodos());
  }
}