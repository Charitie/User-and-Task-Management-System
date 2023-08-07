import { GraphQLNonNull, GraphQLString } from 'graphql';
import Permission from '../../Database/Models/permissions';
import { PermissionType } from '../TypeDefs/PermissionType';

export const ADD_PERMISSION = {
  type: PermissionType,
  args: {
    right: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(_: any, args: any) {
    const { right } = args;

    try {
      const permission = await new Permission({ right });
      const createdPermission = await permission.save();

      console.log('PERMISSION::', createdPermission);
      return createdPermission;
    } catch (error) {
      throw new Error('Failed to add permission');
    }
  }
};
