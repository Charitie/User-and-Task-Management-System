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

    try {
      const role = await new Role({ name });
      const createdRole = await role.save();

      console.log('ROLE::', createdRole);
      return createdRole;
    } catch (error) {
      throw new Error('Failed to add role');
    }
  }
};
