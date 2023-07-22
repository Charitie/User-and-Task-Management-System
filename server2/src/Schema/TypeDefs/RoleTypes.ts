import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const RoleType = new GraphQLObjectType({
  name: 'Role',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

export interface IRole {
  name: string;
}
