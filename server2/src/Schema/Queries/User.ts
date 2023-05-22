import { GraphQLList } from 'graphql';
import { IUser, UserType } from '../TypeDefs/UserType';
import User from '../../Database/Models/users';

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(): Promise<IUser[]> {
    return User.find();
  }
};
