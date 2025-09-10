import { startHttpServer } from "./infrastructure/http-server";

startHttpServer().catch((err) => console.error("Failed to start server:", err));
