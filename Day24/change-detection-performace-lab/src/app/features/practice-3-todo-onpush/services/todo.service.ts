import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todo$ = this.todosSubject.asObservable();
  addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    const current = this.todosSubject.value;
    this.todosSubject.next([...current, newTodo])
  }

  toggleTodo(id: number) {
    const updated = this.todosSubject.value.map(
      todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
    );
    this.todosSubject.next(updated);
  }

  deleteTodo(id: number) {
    const updated = this.todosSubject.value.filter(t => t.id !== id);
    this.todosSubject.next(updated);
  }


}
