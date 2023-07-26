import { rule } from 'graphql-shield';
import jwt from 'jsonwebtoken';

import { getConfig } from '../../Config/index,';

const { secretKey } = getConfig();

export const isAuthenticated = rule()(async (parent, args, ctx, info) => true);
export const canAddRole = rule()(async (parent, args, ctx, info) => false);
export const isAuthorized = rule()(async (parent, args, ctx, info) => {
  console.log('headers::', ctx.headers);
  const { authorization } = ctx.headers;
  if (!authorization) throw new Error('No token, authorization denied');

  const token = authorization.replace('Bearer', '').trim();

  const { id } = jwt.verify(token, secretKey) as { id: string };

  return !!id;
});
