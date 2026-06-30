import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoInput {
  text = '';

  constructor(private todoService: TodoService){}
  add() {
    if (!this.text.trim()) return;
    this.todoService.addTodo(this.text);
    this.text = '';
  }
}
