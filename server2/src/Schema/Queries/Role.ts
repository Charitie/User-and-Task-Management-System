import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import Role from '../../Database/Models/roles';
import { IRole, RoleType } from '../TypeDefs/RoleTypes';
import { IResponse, MessageType } from '../TypeDefs/MessageType';

export const GET_ROLES = {
  type: new GraphQLList(RoleType),
  resolve(): Promise<IRole[]> {
    return Role.find();
  }
};

export const GET_ROLE_PERMISSIONS = {
  type: MessageType,
  args: {
    roleId: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(_: any, arg: any): Promise<IResponse> {
    try {
      const rolePermissions = await Role.findById({ _id: arg.roleId })
        .populate('permissions')
        .exec();

      return {
        successful: true,
        message: 'Role permissions fetched successfully',
        data: [rolePermissions]
      };
    } catch (error) {
      console.log('ERRPR:::', error);
      throw new Error('Failed to fetch role permissions');
    }
  }
};
