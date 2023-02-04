import {Component} from '@angular/core';

export interface ITodos {
  id: string,
  title: string,
  isDone: boolean,
  priority?: string,
  category?: string,
}

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos: ITodos[] = [
    {id: '1', title: 'first', isDone: false, priority: 'high'},
    {id: '2', title: 'second', isDone: false, priority: 'medium'},
    {id: '3', title: 'third', isDone: false, priority: 'low'},
    {id: '4', title: 'four', isDone: false, priority: 'free'},
  ];

  addTodo(todo: ITodos) {
    this.todos.push(todo);
  }
}
