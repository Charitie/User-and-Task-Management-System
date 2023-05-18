import { GraphQLList } from 'graphql';
import { ITodo, TodoType } from '../TypeDefs/TodoType';
import Todo from '../../Database/Models/todolist';

export const GET_TODO_LIST = {
  type: new GraphQLList(TodoType),
  resolve(): Promise<ITodo[]> {
    console.log('WHERE AM I  >>>>>>>>>.......');

    return Todo.find();
  }
};
