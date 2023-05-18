import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_TODO_LIST } from './Queries/Todo';
import { ADD_TODO, DELETE_TODO, UPDATE_TASK } from './Mutations/Todo';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getTodoList: GET_TODO_LIST
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: ADD_TODO,
    deleteTodo: DELETE_TODO,
    updateTask: UPDATE_TASK
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
