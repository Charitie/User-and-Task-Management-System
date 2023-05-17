export type TodoList = {
  task: string;
  id: number;
  completed: boolean;
};
export const todoList: TodoList[] = [
  { id: 1, task: 'Clean', completed: false },
  { id: 2, task: 'Watch', completed: false }
];
