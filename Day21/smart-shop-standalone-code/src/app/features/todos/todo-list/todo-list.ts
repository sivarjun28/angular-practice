import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {

  id: number;
  title: string;
  completed: boolean;

}
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {

  todoText = '';

  todos: Todo[] = [];

  addTodo() {

    if (!this.todoText.trim()) {

      return;

    }

    this.todos.push({

      id: Date.now(),

      title: this.todoText,

      completed: false

    });

    this.todoText = '';

  }

  deleteTodo(id: number) {

    this.todos = this.todos.filter(

      todo => todo.id !== id

    );

  }

  toggleTodo(id: number) {

    this.todos = this.todos.map(

      todo =>

        todo.id === id

          ?

          {

            ...todo,

            completed: !todo.completed

          }

          : todo

    );

  }

}

