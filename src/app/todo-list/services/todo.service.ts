import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class TodoService {
  todos$: Observable<any[]> = of([]);

  constructor() {
  }

  getAllTodos(): Observable<any[]> {
    return this.todos$;
  }
}
