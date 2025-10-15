import { Announcement as Announcement_ } from '@/src/gen/genTypes';

export class Announcement {
  constructor(
    public id: string,
    public message: string,
    public author: string,
    public createdAt: string,
  ) {}

  static fromTelepact(announcement: Announcement_): Announcement {
    return new Announcement(
      announcement.id(),
      announcement.message(),
      announcement.author(),
      new Date(announcement.createdAt()).toLocaleString(),
    );
  }
}
