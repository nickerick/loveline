import { Kysely } from 'kysely';
import type { Database } from '../models/database';
import type { DbUser, NewDbUser } from '../models/user';

export class UserRepository {
  constructor(private db: Kysely<Database>) {}

  async findAll(): Promise<DbUser[] | undefined> {
    return await this.db.selectFrom('user').selectAll().execute();
  }

  async create(user: NewDbUser): Promise<DbUser> {
    return this.db
      .insertInto('user')
      .values(user)
      .returningAll()
      .executeTakeFirstOrThrow();
  }
}
