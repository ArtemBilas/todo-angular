import { Component, Input } from '@angular/core';
import { ITodos } from '../../todo-list.component';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: ITodos;
}
