import type { AnnouncementTable } from './announcement';
import type { UserTable } from './user';

export interface Database {
  user: UserTable;
  announcement: AnnouncementTable;
}
