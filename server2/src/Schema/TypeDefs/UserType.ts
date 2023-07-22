import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    age: { type: GraphQLInt },
    roleId: { type: GraphQLString }
  })
});

export interface IUser {
  name: string;
  email: string;
  password: boolean;
  age: number;
  roleId: string;
}

export interface IPasswordEncryption {
  password: string;
  saltRounds: number;
}

// TODO: how to extends IPasswordEncryption for password type only
export interface IPasswordComparison {
  password: string;
  storedHashedPassword: string | undefined; //TODO:: should not be undefine,
}
