import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_TODO_LIST } from './Queries/Todo';
import { ADD_TODO, DELETE_TODO, UPDATE_TASK } from './Mutations/Todo';
import { GET_ALL_USERS } from './Queries/User';
import { ADD_USER, LOGIN_USER } from './Mutations/User';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllusers: GET_ALL_USERS,
    loginUser: LOGIN_USER,
    getTodoList: GET_TODO_LIST
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: ADD_USER,
    addTodo: ADD_TODO,
    deleteTodo: DELETE_TODO,
    updateTask: UPDATE_TASK
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
