import {
  ServerHandler_,
  User,
  createAnnouncement,
  getAnnouncements,
  getUsers,
} from '../gen/all_.js';
import {
  announcementRepository,
  userRepository,
} from '../infrastructure/repository.js';
import { AnnouncementHandler } from './AnnouncementHandler.js';
import { UserHandler } from './UserHandler.js';

/// Implementation of the Telepact ServerHandler_
///
/// This default handler routes interface methods to their specific domain handlers
export class ServerHandler extends ServerHandler_ {
  private userHandler = new UserHandler(userRepository);
  private announcementHandler = new AnnouncementHandler(announcementRepository);

  /* Users */

  override async getUsers(
    headers: Record<string, any>,
    input: getUsers.Input,
  ): Promise<[Record<string, any>, getUsers.Output]> {
    return this.userHandler.getUsers(headers, input);
  }

  /* Announcements */

  override async getAnnouncements(
    headers: Record<string, any>,
    input: getAnnouncements.Input,
  ): Promise<[Record<string, any>, getUsers.Output]> {
    return this.announcementHandler.getAnnouncements(headers, input);
  }

  override async createAnnouncement(
    headers: Record<string, any>,
    input: createAnnouncement.Input,
  ): Promise<[Record<string, any>, createAnnouncement.Output]> {
    return this.announcementHandler.createAnnouncement(headers, input);
  }
}
