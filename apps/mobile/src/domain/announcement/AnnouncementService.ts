import {
  createAnnouncement,
  getAnnouncements,
  TelepactClient,
} from '../../infrastructure/TelepactService';
import { Announcement } from './Announcement';

export class AnnouncementService {
  constructor(private client: TelepactClient) {}

  async getAllAnnouncements(): Promise<Announcement[]> {
    try {
      const resp = await this.client.getAnnouncements(
        {},
        getAnnouncements.Input.from({}),
      );

      if (resp[1].getTaggedValue().tag === 'Ok_') {
        const announcements = (
          resp[1].getTaggedValue().value as getAnnouncements.Output.Ok_
        ).announcements();

        return announcements.map(Announcement.fromTelepact);
      }
    } catch (err) {
      // safest way: log error + stack trace
      if (err instanceof Error) {
        console.error('Error:', err.message);
        console.error('Stack trace:', err.stack);
      } else {
        console.error('Non-Error thrown:', err);
      }
      console.log(err);
    }

    return [];
  }

  async createAnnouncement(message: string, author: string): Promise<void> {
    try {
      const resp = await this.client.createAnnouncement(
        {},
        createAnnouncement.Input.from({
          message: message,
          author: author,
        }),
      );

      if (resp[1].getTaggedValue().tag !== 'Ok_') {
        throw Error('Failed to create announcement');
      }
    } catch (err) {
      // safest way: log error + stack trace
      if (err instanceof Error) {
        console.error('Error:', err.message);
        console.error('Stack trace:', err.stack);
      } else {
        console.error('Non-Error thrown:', err);
      }
      console.log(err);
    }
  }
}
