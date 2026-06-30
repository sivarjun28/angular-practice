import { Injectable, signal } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private idCounter = 1;
  private todos = signal<Todo[]>([]);

  getTodos() {
    return this.todos();
  }

  addTodo(title: string) {
    const newTodo: Todo = {
        id: this.idCounter++,
      title,
      completed: false
    };

    this.todos.update(t => [...t, newTodo]);
  }

  toggleTodo(id: number) {
    this.todos.update(t =>
      t.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  deleteTodo(id: number) {
    this.todos.update(t => t.filter(todo => todo.id !== id));
  }

  getCompletedTodos() {
    return this.todos().filter(t => t.completed);
  }
}