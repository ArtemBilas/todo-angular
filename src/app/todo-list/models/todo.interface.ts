export interface TodoItem {
  id: string,
  title: string,
  priority?: string,
  isDone?: boolean,
  category?: string
}

export interface TodoState {
  todos: TodoItem[],
  loading: boolean,
  error: string | null
}

export interface AppState {
  todoList: TodoItem[]
}
