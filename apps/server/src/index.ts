import { createServer } from 'http';
import {
  Server,
  ServerOptions,
  TelepactSchema,
  TelepactSchemaFiles
} from "telepact";
import * as fs from "fs";
import * as path from 'path';
import { ServerHandler } from './handler';

// Telepact server configuration
const files = new TelepactSchemaFiles('/Users/nicke/Workspace/react-native-playground/server/src/schema', fs, path);
const schema = TelepactSchema.fromFileJsonMap(files.filenamesToJson);
const serverHandler = new ServerHandler();
const options = new ServerOptions();
options.onError = (error) => {
  console.error('Telepact server error:', error);
};
options.authRequired = false;

// Telepact server
const server = new Server(schema, serverHandler.handler.bind(serverHandler), options);

// Create raw HTTP server
const httpServer = createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/telepact') {
    const chunks: Buffer[] = [];

    req.on('data', (chunk) => {
      chunks.push(chunk);
    });

    req.on('end', async () => {
      const rawBody = Buffer.concat(chunks);
      console.log('Received raw bytes:', rawBody);

      // Call your server.process with Uint8Array
      let responseBytes: Uint8Array;
      try {
        responseBytes = await server.process(new Uint8Array(rawBody));
      } catch (err) {
        console.error('Error processing request:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }

      // Respond with binary data
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/octet-stream');
      res.end(Buffer.from(responseBytes));
    });

    req.on('error', (err) => {
      console.error('Request error:', err);
      res.writeHead(500);
      res.end('Internal Server Error\n');
    });
  } else if (req.method === 'GET' && req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('pong\n');
  } else {
    res.writeHead(404);
    res.end('Not Found\n');
  }
});

httpServer.listen(8081, () => {
  console.log('Server listening on http://localhost:8081');
});