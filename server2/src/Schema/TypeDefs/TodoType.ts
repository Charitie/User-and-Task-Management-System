import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
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
