import {
  Server,
  ServerOptions,
  TelepactSchema,
  TelepactSchemaFiles,
} from 'telepact';
import * as fs from 'fs';
import * as path from 'path';
import { ServerHandler } from '../handlers/ServerHandler.js';

export function createTelepactServer(): Server {
  // Load schema
  const files = new TelepactSchemaFiles('dist/gen/telepact/schemas', fs, path);
  const schema = TelepactSchema.fromFileJsonMap(files.filenamesToJson);

  // Handler
  const handler = new ServerHandler();

  // Options
  const options = new ServerOptions();
  options.onError = (err) => console.error('Telepact server error:', err);
  options.authRequired = false;

  return new Server(schema, handler.handler.bind(handler), options);
}
