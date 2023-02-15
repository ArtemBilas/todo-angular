import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TodoService} from "../services/todo.service";
import * as TodoActions from './todo.actions';
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class TodoEffects {
  getTodos$ = createEffect(() => this.actions$
    .pipe(
      ofType(TodoActions.getTodos),
      switchMap(() => this.todoService.getAllTodos()
        .pipe(
          map((response: any) => TodoActions.getTodosSuccess({payload: response})),
          catchError(error => of(TodoActions.getTodosFail(error)))
        )
      )
    )
  )

  constructor(private actions$: Actions, private todoService: TodoService) {
  }


}
