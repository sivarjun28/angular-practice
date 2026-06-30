import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a todo', () => {
    service.addTodo('Angular');

    const todos = service.getTodos();

    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('Angular')
    expect(todos[0].completed).toBe(false)
  })

  it('should toggle todo completion', () => {
    service.addTodo('Test me');

    const todo = service.getTodos()[0];

    service.toggleTodo(todo.id);

    expect(service.getTodos()[0].completed).toBe(true);
  });

  it('should delete todo', () => {
    service.addTodo('Delete me');

    const todo = service.getTodos()[0];

    service.deleteTodo(todo.id);

    expect(service.getTodos().length).toBe(0);
  })
  it('should return only completed todos', () => {
    service.addTodo('Task 1');
    service.addTodo('Task 2');

    const todos = service.getTodos();

    service.toggleTodo(todos[0].id); // mark first as completed

    const completed = service.getCompletedTodos();

    expect(completed.length).toBe(1);
    expect(completed[0].completed).toBe(true);
  });
});
