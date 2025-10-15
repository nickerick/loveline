import {
  Message,
  Server,
  ServerOptions,
  TelepactSchema,
  TelepactSchemaFiles,
} from 'telepact';
import * as fs from 'fs';
import * as path from 'path';
import { ServerHandler } from '../handlers/ServerHandler.js';
import { verifyToken } from '../auth/authentication.js';

export function createTelepactServer(): Server {
  // Load schema
  const files = new TelepactSchemaFiles('src/gen/telepact/schemas', fs, path);
  const schema = TelepactSchema.fromFileJsonMap(files.filenamesToJson);

  // Options
  const options = new ServerOptions();
  options.onError = (err) => console.error('Telepact server error:', err);
  options.onRequest = (message) =>
    console.log(
      'Recived request:',
      message.getBodyTarget(),
      message.getBodyPayload(),
    );
  options.onResponse = (message) =>
    console.log(
      'Response sent:',
      JSON.stringify(message.getBodyTarget(), null, 2),
      JSON.stringify(message.getBodyPayload(), null, 2),
    );
  options.authRequired = false;

  return new Server(schema, serverHandler, options);
}

async function serverHandler(message: Message): Promise<Message> {
  const target = message.getBodyTarget();

  // Authentication
  if (!authExclusions.includes(target)) {
    const user = verifyToken(message.headers);
    if (!user)
      return new Message(
        {},
        { ErrorUnauthenticated__: { message: `Failed to authenticate user` } },
      );
  }

  // Process request
  const handler = new ServerHandler();
  const response = await handler.handler(message);

  return response;
}

const authExclusions = ['fn.login', 'fn.refresh', 'fn.createUser'];
