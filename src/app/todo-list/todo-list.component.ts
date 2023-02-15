import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {TodoItem, TodoState} from "./models/todo.interface";
import * as TodoActions from "./store/todo.actions";
import {selectorTodo} from "./store/todo.selectors";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  todoList$!: Observable<TodoItem[]>;

  constructor(
    private store: Store<{ todos: TodoState }>
  ) {
  }

  addTodo(todo: TodoItem) {
    console.log(todo);
    this.store.dispatch(TodoActions.addTodo({payload: todo}))
  }

  removeTodo(id: string) {
    this.store.dispatch(TodoActions.deleteTodo({payload: id}));
  }

  isDoneTodo(id: string) {
    this.store.dispatch(TodoActions.isDoneTodo({payload: id}));
  }

  ngOnInit() {
    this.todoList$ = this.store.pipe(select(selectorTodo));
  }
}
