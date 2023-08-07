import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';
import { PermissionType } from './PermissionType';

export const RoleType = new GraphQLObjectType({
  name: 'Role',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    permissions: { type: new GraphQLList(PermissionType) }
  })
});

export interface IRole {
  name: string;
}
