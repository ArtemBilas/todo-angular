import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {getUniqueId} from "../../../shared/lib/id-generator";
import {TodoItem} from "../../models/todo.interface";

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Output() emitInputValue = new EventEmitter<TodoItem>();
  form!: FormGroup;
  todo!: TodoItem;

  constructor(private formBuilder: FormBuilder) {
  }

  get formValue() {
    return this.form.get('todoInput')?.value;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      todoInput: ['']
    });
  }

  submitHandler() {
    if (!!this.formValue) {
      this.todo = {
        id: getUniqueId(1),
        title: this.formValue,
        priority: 'free',
        isDone: false,
        category: 'common'
      }
      this.emitInputValue.emit(this.todo);
      this.form.reset();
    } else {
      return;
    }
  }
}
