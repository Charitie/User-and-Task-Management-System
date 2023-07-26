export type Config = {
  env: string;
  port: number;
  dbPassword: string;
  dbUsername: string;
  dbName: string;
  secretKey: string;
  expiresIn: object;
};
