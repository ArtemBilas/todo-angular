import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {getUniqueId} from "../../../shared/lib/id-generator";
import {ITodos} from "../../todo-list.component";

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Output() emitInputValue = new EventEmitter<ITodos>();
  form!: FormGroup;
  todo!: ITodos;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      todoInput: ['']
    });
  }

  get formValue() {
    return this.form.get('todoInput')?.value;
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
