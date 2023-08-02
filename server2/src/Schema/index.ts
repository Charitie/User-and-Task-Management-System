import { applyMiddleware } from 'graphql-middleware';
import { shield } from 'graphql-shield';

import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { ADD_ROLE } from './Mutations/Role';
import { ADD_TODO, DELETE_TODO, UPDATE_TASK } from './Mutations/Todo';
import { ADD_USER, LOGIN_USER } from './Mutations/User';
import { GET_ROLES } from './Queries/Role';
import { GET_TODO_LIST } from './Queries/Todo';
import { GET_ALL_USERS } from './Queries/User';
import { isAuthenticated, isAuthorized } from '../Util/Middleware/auth';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllusers: GET_ALL_USERS,
    loginUser: LOGIN_USER,
    getTodoList: GET_TODO_LIST,
    getRoles: GET_ROLES
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: ADD_USER,
    addTodo: ADD_TODO,
    deleteTodo: DELETE_TODO,
    updateTask: UPDATE_TASK,
    addRole: ADD_ROLE
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

const permissions = shield(
  {
    RootQuery: { getRoles: isAuthenticated, getTodoList: isAuthenticated },
    Mutation: { addUser: isAuthenticated, addRole: isAuthorized }
  },
  { debug: true }
);

export const schemaWithPermissions = applyMiddleware(schema, permissions);
