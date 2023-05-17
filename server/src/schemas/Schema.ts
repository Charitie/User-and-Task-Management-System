import { gql } from 'apollo-server-express';
import { TodoList } from './';

const Schema = gql`
  type Query {
    getTodoList: [TodoList]
    getSingleTodo(id: Int): TodoList
  }
`;

export default Schema;
