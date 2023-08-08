import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import Permission from '../../Database/Models/permissions';
import Role from '../../Database/Models/roles';
import { IResponse, MessageType } from '../TypeDefs/MessageType';
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

export const ASSIGN_PERMISSION_TO_ROLE = {
  type: MessageType,
  args: {
    roleId: { type: new GraphQLNonNull(GraphQLString) },
    permissionsIds: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
  },
  async resolve(_: any, args: any): Promise<IResponse> {
    const { roleId, permissionsIds } = args;
    try {
      const role = await Role.findById({ _id: roleId }).populate('permissions');

      const permissionsIDs = await Permission.find({
        _id: {
          $in: permissionsIds
        }
      });

      if (role && permissionsIDs) {
        // make permissions array have unique rights(no duplicates)
        const permissionsExist = role?.permissions.filter(({ _id }) =>
          permissionsIds.includes(String(_id))
        );

        console.log(permissionsExist, permissionsIds);

        if (!permissionsExist) {
          //add permission to role
          role?.permissions.push(...permissionsIds);
          const rolePermissions = await role?.save();

          return {
            successful: true,
            message: 'Permission(s) assigned to role successfully',
            data: [rolePermissions]
          };
        } else
          return {
            successful: true,
            message: 'permission already exist in role'
          };
      } else {
        return {
          successful: true,
          message: 'Invalid details'
        };
      }
    } catch (error) {
      console.log('ERROR::', error);
      throw new Error('Failed to assign permission to role');
    }
  }
};
