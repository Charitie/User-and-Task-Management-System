import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';
import { IPermission, PermissionType } from './PermissionType';

export const RoleType = new GraphQLObjectType({
  name: 'Role',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    permissions: { type: new GraphQLList(PermissionType) }
  })
});

export const RolePermissionsType = new GraphQLObjectType({
  name: 'RolePermissions',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    permissions: { type: new GraphQLList(PermissionType) }
  })
});

export interface IRole {
  name: string;
  // permissions?: [];
}

// export interface IRolePermissions {
//   id: string;
//   name: string;
//   permissions: IPermission[];
// }
