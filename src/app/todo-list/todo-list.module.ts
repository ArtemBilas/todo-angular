import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodoInputComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoListComponent
    ]
})
export class TodoListModule { }
