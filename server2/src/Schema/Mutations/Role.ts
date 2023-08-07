import { GraphQLNonNull, GraphQLString } from 'graphql';
import Role from '../../Database/Models/roles';
import { RoleType } from '../TypeDefs/RoleTypes';
import { MessageType } from '../TypeDefs/MessageType';

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

export const ASSIGN_PERMISSION_TO_ROLE = {
  type: MessageType,
  args: {
    roleId: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(_: any, args: any) {
    const { roleId } = args;

    try {
      const role = await Role.findById({ _id: roleId }).populate('permissions');
      // .exec();

      console.log('PERMISSIONS on role::', role);
      console.log('POPULATED::', role?.populated('permissions'));

      return {
        message: `success`,
        successful: true,
        data: role
      };
    } catch (error) {
      throw new Error('Failed to assign permission to role');
    }
  }
};
