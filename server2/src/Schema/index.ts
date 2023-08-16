import { applyMiddleware } from 'graphql-middleware';
import { shield } from 'graphql-shield';

import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { ADD_ROLE, ASSIGN_PERMISSION_TO_ROLE } from './Mutations/Role';
import { ADD_TODO, DELETE_TODO, UPDATE_TASK } from './Mutations/Todo';
import { ADD_USER, LOGIN_USER } from './Mutations/User';
import { GET_ROLES, GET_ROLE_PERMISSIONS } from './Queries/Role';
import { GET_TODO_LIST } from './Queries/Todo';
import { GET_ALL_USERS } from './Queries/User';
import { isAuthenticated, isAuthorized } from '../Util/Middleware/auth';
import { ADD_PERMISSION } from './Mutations/Permission';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllusers: GET_ALL_USERS,
    getTodoList: GET_TODO_LIST,
    getRoles: GET_ROLES,
    getRolePermissions: GET_ROLE_PERMISSIONS
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    loginUser: LOGIN_USER,
    addUser: ADD_USER,
    addTodo: ADD_TODO,
    deleteTodo: DELETE_TODO,
    updateTask: UPDATE_TASK,
    addRole: ADD_ROLE,
    addPermission: ADD_PERMISSION,
    assignPermissionToRole: ASSIGN_PERMISSION_TO_ROLE
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

const permissions = shield(
  {
    RootQuery: { getRoles: isAuthenticated, getTodoList: isAuthenticated },
    Mutation: { addUser: isAuthenticated, addRole: isAuthenticated }
  },
  { debug: true }
);

export const schemaWithPermissions = applyMiddleware(schema, permissions);
