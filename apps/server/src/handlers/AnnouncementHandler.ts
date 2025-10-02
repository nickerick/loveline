import type { NewDbAnnouncement } from '../data/models/announcement.js';
import type { AnnouncementRepository } from '../data/repositories/AnnouncementRepository.js';
import {
  Announcement,
  createAnnouncement,
  getAnnouncements,
  getUsers,
} from '../gen/telepact/genTypes.js';
import { verifyToken, unauthenticatedOutput } from '../auth/authentication.js';

export class AnnouncementHandler {
  constructor(private readonly announcementRepo: AnnouncementRepository) {}

  async getAnnouncements(
    headers: Record<string, any>,
    input: getAnnouncements.Input,
  ): Promise<[Record<string, any>, getAnnouncements.Output]> {
    const user = verifyToken(headers);
    if (!user) return unauthenticatedOutput(getAnnouncements.Output);

    const allAnnouncements = await this.announcementRepo.findAll();

    const responseAnnouncements: Announcement[] = [];
    allAnnouncements?.forEach((announcement) => {
      const mappedAnnouncement = Announcement.from({
        id: announcement.id,
        message: announcement.message,
        author: announcement.author,
        createdAt: announcement.created_at,
      });
      responseAnnouncements.push(mappedAnnouncement);
    });

    const output = getAnnouncements.Output.from_Ok_({
      announcements: responseAnnouncements,
    });
    return [{}, output];
  }

  async createAnnouncement(
    headers: Record<string, any>,
    input: createAnnouncement.Input,
  ): Promise<[Record<string, any>, createAnnouncement.Output]> {
    const newDbAnnouncement: NewDbAnnouncement = {
      message: input.message(),
      author: input.author(),
    };

    const newAnnouncement =
      await this.announcementRepo.create(newDbAnnouncement);

    const responseAnnouncement = Announcement.from({
      id: newAnnouncement!.id,
      message: newAnnouncement!.message,
      author: newAnnouncement!.author,
      createdAt: newAnnouncement!.created_at,
    });

    const output = createAnnouncement.Output.from_Ok_({
      announcement: responseAnnouncement,
    });
    return [{}, output];
  }
}
