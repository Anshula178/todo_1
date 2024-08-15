interface TodoType {
    text: string;
    id: number;
    completed: boolean;
    priority: string;
  }
  
  interface TodoStateType {
    editId: number;
    inputValue: string;
    error: string;
    todoList: TodoType[];
    filter: string;
    priority: string;
  }