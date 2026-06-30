import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  newTodo: string = '';

  todos = [
    {
      text: 'Learn Angular',
      completed: false,
      isEditing: false
    },
    {
      text: 'Practice Components',
      completed: true,
      isEditing: false
    }
  ];

  addTodo(){
    if(this.newTodo.trim() !== ''){
      this.todos.push({
        text: this.newTodo,
        completed : false,
        isEditing : false
      });

      this.newTodo = '';
    }
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1);

  }

  editTodo(todo : any){
    todo.isEditing = true;
  }

  saveTodo(todo: any){
    todo.isEditing = true;
  }
}