import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from "../../models/todo.interface";


@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: TodoItem;

  constructor() {
  }

  ngOnInit() {
    console.log(this.todo);
  }

}
