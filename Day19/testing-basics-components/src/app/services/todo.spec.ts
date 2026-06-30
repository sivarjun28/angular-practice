import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo';

describe('Todo', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add todo', () => {

    service.add({
      id: 1,
      title: 'Learn Angular',
      completed: false
    });

    expect(service.todos.length).toBe(1);
  });

  it('should remove todo', () => {
    service.add({
      id: 1,
      title: 'Task 1',
      completed: false
    });

    service.remove(1);

    expect(service.todos.length).toBe(0);
  })

  it('should toggle completed status', () => {
    service.add({
      id: 1,
      title: 'Task 1',
      completed: false
    });

    service.toggle(1);

     expect(service.todos[0].completed).toBe(true);
  });

  it('should toggle completed status back to false', () =>{
    service.add({
      id:1,
      title: 'Task1',
      completed : true
    })

    service.toggle(1);

    expect(service.todos[0].completed).toBe(false);
  })
});
