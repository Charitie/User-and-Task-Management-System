import { GraphQLNonNull, GraphQLString } from 'graphql';
import Role from '../../Database/Models/roles';
import { RoleType } from '../TypeDefs/RoleTypes';

export const ADD_ROLE = {
  type: RoleType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(_: any, args: any) {
    const { name } = args;
    const role = await new Role({ name });
    return role.save();
  }
};
