import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

export const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: { type: GraphQLID },
    task: { type: GraphQLString },
    description: { type: GraphQLString },
    completed: { type: GraphQLBoolean }
  })
});

export interface ITodo {
  task: string;
  description: string;
  completed: boolean;
}
