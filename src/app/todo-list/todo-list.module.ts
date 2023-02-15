import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {TodoListComponent} from './todo-list.component';
import {TodoInputComponent} from './components/todo-input/todo-input.component';
import {PrimengModule} from '../primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from "@ngrx/store";
import {todoListReducer} from "./store/todo.reducer";
import {EffectsModule} from "@ngrx/effects";
import {TodoEffects} from "./store/todo.effects";
import {TodoService} from "./services/todo.service";

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
    ReactiveFormsModule,
    StoreModule.forFeature('todos', todoListReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  exports: [
    TodoListComponent
  ],
  providers: [TodoService]
})
export class TodoListModule {
}
