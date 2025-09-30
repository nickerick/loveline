import type {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely';

export interface AnnouncementTable {
  id: Generated<string>;
  message: string;
  author: string;
  created_at: ColumnType<number, never, never>;
}

export type DbAnnouncement = Selectable<AnnouncementTable>;
export type NewDbAnnouncement = Insertable<AnnouncementTable>;
export type UpdateDbAnnouncement = Updateable<AnnouncementTable>;
