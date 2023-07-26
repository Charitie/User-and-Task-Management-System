import jwt, { Secret } from 'jsonwebtoken';

const createToken = (
  payload: string | object | Buffer,
  secretKey: Secret,
  expiresIn: object
) => jwt.sign(payload, secretKey, expiresIn);

export default createToken;
