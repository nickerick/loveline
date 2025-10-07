import { Kysely } from 'kysely';
import { v4 as uuidv4 } from 'uuid';
import type { Database } from '../models/database';
import type { DbUser, NewDbUser } from '../models/user';

export class UserRepository {
  constructor(private db: Kysely<Database>) {}

  async findAll(): Promise<DbUser[]> {
    return await this.db.selectFrom('user').selectAll().execute();
  }

  async findByUsername(username: string): Promise<DbUser | undefined> {
    return await this.db
      .selectFrom('user')
      .selectAll()
      .where('username', '=', username)
      .executeTakeFirst();
  }

  async create(newUser: NewDbUser): Promise<DbUser> {
    const id = uuidv4();

    await this.db
      .insertInto('user')
      .values({ id, ...newUser })
      .execute();

    return await this.db
      .selectFrom('user')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirstOrThrow();
  }
}
