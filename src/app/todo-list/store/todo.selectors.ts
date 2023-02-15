import {TodoItem, TodoState} from "../models/todo.interface";
import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";

const getTodoList = (state: TodoState): TodoItem[] => state.todos;

export const featureSelectorTodoState: MemoizedSelector<object, TodoState> = createFeatureSelector<TodoState>('todos');

export const selectorTodo: MemoizedSelector<object, TodoItem[]> = createSelector(featureSelectorTodoState, getTodoList);
