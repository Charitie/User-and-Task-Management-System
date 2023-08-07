import { GraphQLList } from 'graphql';
import { ITodo, TodoType } from '../TypeDefs/TodoType';
import Todo from '../../Database/Models/todo';

export const GET_TODO_LIST = {
  type: new GraphQLList(TodoType),
  resolve(): Promise<ITodo[]> {
    return Todo.find();
  }
};
