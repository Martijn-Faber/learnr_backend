import dotenv from 'dotenv';
dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 8000;
const SERVER_PREFIX = process.env.SERVER_PREFIX;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
  prefix: SERVER_PREFIX,
};

const JWT_SECRET = process.env.JWT_SECRET;

const JWT = {
  secret: JWT_SECRET,
};

const config = {
  server: SERVER,
  jwt: JWT,
};

export default config;
