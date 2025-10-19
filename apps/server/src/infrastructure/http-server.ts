import { createServer } from 'http';
import { createTelepactServer } from './telepact.js';

export async function startHttpServer() {
  const telepactServer = createTelepactServer();

  const httpServer = createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/telepact') {
      const chunks: Buffer[] = [];

      req.on('data', (chunk) => {
        chunks.push(chunk);
      });

      req.on('end', async () => {
        const rawBody = Buffer.concat(chunks);

        let responseBytes: Uint8Array;
        try {
          const response = await telepactServer.process(
            new Uint8Array(rawBody),
          );
          responseBytes = response.bytes;
        } catch (err) {
          console.error('Error processing request:', err);
          res.statusCode = 500;
          res.end('Internal Server Error');
          return;
        }

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

  const port = 8080;
  httpServer.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`),
  );
}
