import 'dotenv/config';
import joi from 'joi';
import { Config } from './configType';

const envVariablesSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow('development', 'staging', 'production')
      .default('development')
      .required(),
    PORT: joi.number().default(4000),
    DB_USERNAME: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_NAME: joi.string().required()
  })
  .unknown()
  .required();

let config: Config;
export const getConfig = () => {
  if (!config) {
    const { error, value: envVars } = envVariablesSchema.validate(process.env);
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    config = {
      env: envVars.NODE_ENV,
      port: envVars.PORT,
      dbUsername: envVars.DB_USERNAME,
      dbPassword: envVars.DB_PASSWORD,
      dbName: envVars.DB_NAME
    };
  }

  return config;
};
