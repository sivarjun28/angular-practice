import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../core/models/todo';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class TodoComponent {
    todoTitle = '';

    todos = signal<Todo[]>([]);

    addTodo(){
      if(!this.todoTitle.trim()) return;

      const newTodo:Todo = {
        id: Date.now(),
        title: this.todoTitle ,
        completed: false
      };

      this.todos.update(todos => [
        ...todos, 
        newTodo
      ]);
      this.todoTitle = '';
    }

    deleteTodo(id: number){
      this.todos.update(todos =>
        todos.filter(todo => todo.id!==id)
      );
    }

    toggleTodo(id:number){
        this.todos.update(todos =>
          todos.map(todo => 
            todo.id === id ?{
              ...todo,
              completed:!todo.completed
            } : todo
          )
        );
    }

    resetTodos(){
      this.todos.set([]);
    }
}
