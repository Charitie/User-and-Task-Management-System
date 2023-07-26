import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

export const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString }
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
