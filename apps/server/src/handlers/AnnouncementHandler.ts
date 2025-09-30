import type { NewDbAnnouncement } from '../data/models/announcement.js';
import type { AnnouncementRepository } from '../data/repositories/AnnouncementRepository.js';
import {
  Announcement,
  createAnnouncement,
  getAnnouncements,
} from '../gen/telepact/all_.js';

export class AnnouncementHandler {
  constructor(private readonly announcementRepo: AnnouncementRepository) {}

  async getAnnouncements(
    headers: Record<string, any>,
    input: getAnnouncements.Input,
  ): Promise<[Record<string, any>, getAnnouncements.Output]> {
    const allAnnouncements = await this.announcementRepo.findAll();

    const responseAnnouncements: Announcement[] = [];
    allAnnouncements?.forEach((announcement) => {
      const mappedAnnouncement = Announcement.fromTyped({
        id: announcement.id,
        message: announcement.message,
        author: announcement.author,
        createdAt: announcement.created_at,
      });
      responseAnnouncements.push(mappedAnnouncement);
    });

    const output = getAnnouncements.Output.from_Ok_(
      getAnnouncements.Output.Ok_.fromTyped({
        announcements: responseAnnouncements,
      }),
    );
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

    const responseAnnouncement = Announcement.fromTyped({
      id: newAnnouncement!.id,
      message: newAnnouncement!.message,
      author: newAnnouncement!.author,
      createdAt: newAnnouncement!.created_at,
    });

    const output = createAnnouncement.Output.from_Ok_(
      createAnnouncement.Output.Ok_.fromTyped({
        announcement: responseAnnouncement,
      }),
    );
    return [{}, output];
  }
}
