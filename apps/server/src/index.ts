import { startHttpServer } from './infrastructure/http-server.js';

startHttpServer().catch((err) => console.error('Failed to start server:', err));
