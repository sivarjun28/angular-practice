import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  add(todo: Todo) {
    this.todos.push(todo);
  }

  remove(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  toggle(id: number) {

    const todo = this.todos.find(t => t.id === id);

    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}