import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_TODO_LIST } from './Queries/Todo';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getTodoList: GET_TODO_LIST
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {}
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
