import { Kysely } from 'kysely';
import type { Database } from '../models/database';
import type { DbAnnouncement, NewDbAnnouncement } from '../models/announcement';

export class AnnouncementRepository {
  constructor(private db: Kysely<Database>) {}

  async findAll(): Promise<DbAnnouncement[] | undefined> {
    return await this.db.selectFrom('announcement').selectAll().execute();
  }

  async findById(id: string): Promise<DbAnnouncement | undefined> {
    return await this.db
      .selectFrom('announcement')
      .where('id', '=', id)
      .selectAll()
      .executeTakeFirst();
  }

  async create(newAnnouncement: NewDbAnnouncement): Promise<DbAnnouncement> {
    return this.db
      .insertInto('announcement')
      .values(newAnnouncement)
      .returningAll()
      .executeTakeFirstOrThrow();
  }
}
