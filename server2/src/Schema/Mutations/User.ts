import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';

import { IPasswordEncryption, UserType } from '../TypeDefs/UserType';
import User from '../../Database/Models/users';
import {
  comparePassword,
  encryptPassword
} from '../../Util/Helpers/passwordEncrypt';
import { MessageType } from '../TypeDefs/MessageType';

export const ADD_USER = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) }
  },
  async resolve(_: any, args: any) {
    // email exists
    // email format validation
    // password length, character validation
    // name validation
    const { name, email, password, age } = args;
    const passwordEncryptionArgs: IPasswordEncryption = {
      password,
      saltRounds: 10
    };
    const hashedPassword = await encryptPassword(passwordEncryptionArgs);
    const user = await new User({ name, email, password: hashedPassword, age });
    return user.save();
  }
};

export const LOGIN_USER = {
  type: MessageType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(_: any, args: any) {
    /*
    check user existance
    validate password

    */
    const { email, password } = args;
    const user = await User.findOne({ email });

    if (!user) {
      return {
        successful: true,
        message: 'INVALID EMAIL OR PASSWORD'
      };
    } else {
      const storedHashedPassword = user.password;

      const isValidPassword = await comparePassword({
        password,
        storedHashedPassword
      });

      if (!isValidPassword) {
        return {
          successful: true,
          message: 'INVALID EMAIL OR PASSWORD'
        };
      } else {
        return {
          successful: true,
          message: 'LOGGED IN SUCCESSFULLY'
        };
      }
    }
  }
};
