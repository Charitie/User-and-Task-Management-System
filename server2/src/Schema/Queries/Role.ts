import { GraphQLList } from 'graphql';
import Role from '../../Database/Models/roles';
import { IRole, RoleType } from '../TypeDefs/RoleTypes';

export const GET_ROLES = {
  type: new GraphQLList(RoleType),
  resolve(): Promise<IRole[]> {
    return Role.find();
  }
};
