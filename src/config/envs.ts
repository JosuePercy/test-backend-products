import 'dotenv/config';

import * as join from 'joi';

interface EnvVars {
  PORT: number;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
}

const envSchema = join
  .object({
    PORT: join.number().required(),
    DB_HOST: join.string().required(),
    DB_PORT: join.number().required(),
    DB_USERNAME: join.string().required(),
    DB_PASSWORD: join.string().allow(''),
    DB_DATABASE: join.string().required(),
  })
  .unknown(true);


const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;


export const envs = {
  port: envVars.PORT,
  database: {
    host: envVars.DB_HOST,
    port: envVars.DB_PORT,
    username: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
    name: envVars.DB_DATABASE,
  },
};
