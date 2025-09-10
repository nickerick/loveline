import { Kysely, MysqlDialect } from "kysely";
import { createPool } from "mysql2";
import type { Database } from "../data/models/database";

const dialect = new MysqlDialect({
  pool: createPool({
    host: process.env.DATABASE_HOST || "localhost",
    port: Number(process.env.DATABASE_PORT) || 3306,
    user: process.env.MYSQL_USER || "admin",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "test",
    connectionLimit: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
