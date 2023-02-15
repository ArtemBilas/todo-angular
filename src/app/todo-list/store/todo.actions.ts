import {createAction, props} from "@ngrx/store";
import {TodoActionsName} from "./todo.actions-name";
import {TodoItem} from "../models/todo.interface";

//client actions
export const addTodo = createAction(TodoActionsName.ADD_TODO, props<{ payload: TodoItem }>());
export const editTodo = createAction(TodoActionsName.EDIT_TODO, props<{ payload: TodoItem }>());
export const deleteTodo = createAction(TodoActionsName.DELETE_TODO, props<{ payload: string }>());
export const isDoneTodo = createAction(TodoActionsName.IS_DONE_TODO, props<{ payload: string }>());

//effects actions
export const getTodos = createAction(TodoActionsName.GET_TODOS, props<{ payload: string }>());
export const getTodosSuccess = createAction(TodoActionsName.GET_TODOS_SUCCESS, props<{ payload: any }>());
export const getTodosFail = createAction(TodoActionsName.GET_TODOS_FAIL, props<{ error: string }>());
