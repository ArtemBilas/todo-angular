import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodoInputComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    TodoListComponent
    ]
})
export class TodoListModule { }
