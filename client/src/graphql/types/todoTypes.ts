export interface ITodo {
    id: string;
    task: string;
    description: string;
    completed: boolean;
  }
  
  export interface ITodoList {
    getTodoList: Array<ITodo>;
  }
  