import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';

import { getConfig } from '../../Config/index,';
import User from '../../Database/Models/users';
import createToken from '../../Util/Helpers/jwtHelper';
import {
  comparePassword,
  encryptPassword
} from '../../Util/Helpers/passwordEncrypt';
import { LoginResponseType } from '../TypeDefs/MessageType';
import { IPasswordEncryption, UserType } from '../TypeDefs/UserType';

const { secretKey, expiresIn } = getConfig();
export const ADD_USER = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    roleId: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(_: any, args: any) {
    // email format validation
    // password length, character validation
    // name validation
    const { name, email, password, age, roleId } = args;

    const userExist = await User.findOne({ email });
    if (userExist) {
      throw Error('Email already taken');
    }

    const passwordEncryptionArgs: IPasswordEncryption = {
      password,
      saltRounds: 10
    };
    const hashedPassword = await encryptPassword(passwordEncryptionArgs);
    const user = await new User({
      name,
      email,
      password: hashedPassword,
      age,
      roleId
    });

    const createdUser = await user.save();

    if (!createdUser) {
      throw new Error('Failed to create user');
    }

    console.log('createdUser', createdUser);

    //create token
    const token = createToken({ id: createdUser._id }, secretKey, {
      expiresIn
    });

    console.log('TOKEN::', token);

    return { name, email, password, age, roleId, token };
  }
};

export const LOGIN_USER = {
  type: LoginResponseType,
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

    console.log('user', user);

    if (!user) {
      return {
        successful: false,
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
        //create token
        const token = createToken({ id: user._id }, secretKey, {
          expiresIn
        });

        const { name, email, roleId } = user;

        return {
          name,
          email,
          roleId,
          successful: true,
          message: 'LOGGED IN SUCCESSFULLY',
          token
        };
      }
    }
  }
};
