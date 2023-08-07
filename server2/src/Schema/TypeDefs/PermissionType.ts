import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export const PermissionType = new GraphQLObjectType({
  name: 'Permission',
  fields: () => ({
    id: { type: GraphQLID },
    right: { type: GraphQLString }
  })
});

export interface IPermission {
  right: string;
}
