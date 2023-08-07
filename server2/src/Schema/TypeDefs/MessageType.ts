import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { RoleType } from './RoleTypes';

export const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    data: { type: new GraphQLList(RoleType) }
  })
});

export const LoginResponseType = new GraphQLObjectType({
  name: 'LoginResponseType',
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    roleId: { type: GraphQLString },
    token: { type: GraphQLString }
  })
});
