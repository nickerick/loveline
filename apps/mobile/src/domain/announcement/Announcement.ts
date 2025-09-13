import { Announcement as Announcement_ } from '@/src/gen/all_';

export class Announcement {
  constructor(
    public id: string,
    public message: string,
    public author: string,
    public created_at: string,
  ) {}

  static fromTelepact(announcement: Announcement_): Announcement {
    return new Announcement(
      announcement.id(),
      announcement.message(),
      announcement.author(),
      announcement.createdAt().toLocaleString(),
    );
  }
}
