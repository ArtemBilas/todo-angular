import {createReducer, on} from "@ngrx/store";
import * as TodoActions from "./todo.actions";
import {initialState} from "./state";

export const todoListReducer = createReducer(
  initialState,
  //client
  on(
    TodoActions.addTodo,
    (state, {payload}) => {
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    }
  ),
  on(
    TodoActions.editTodo,
    (state, {payload}) => {
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    }
  ),
  on(
    TodoActions.deleteTodo,
    (state, {payload}) => {
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== payload)]
      }
    }
  ),
  on(
    TodoActions.isDoneTodo,
    (state, {payload}) => {
      console.log(payload);
      // const newTodo = state.todos.find(payload);
      // newTodo.isDone = !newTodo.isDone;

      return {
        ...state,
        // todos: [...state.todos, newTodo]
      }
    }
  ),
  //effects
  on(
    TodoActions.getTodos,
    (state) => {
      return {
        ...state,
        loading: true
      }
    }
  ),
  on(
    TodoActions.getTodosSuccess,
    (state, {payload}) => {
      return {
        ...state,
        ...{todos: payload}
      }
    }
  ),
  on(
    TodoActions.getTodosFail,
    (state, {error}) => {
      return {
        ...state,
        error
      }
    }
  )
);
