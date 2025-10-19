import type { TypedMessage } from 'telepact';
import {
  TypedServerHandler,
  createAnnouncement,
  createUser,
  createUser,
  getAnnouncements,
  getUsers,
  login,
  refresh,
} from '../gen/telepact/genTypes.js';
  login,
  refresh,
} from '../gen/telepact/genTypes.js';
import {
  announcementRepository,
  userRepository,
} from '../infrastructure/repository.js';
import { AnnouncementHandler } from './AnnouncementHandler.js';
import { AuthenticationHandler } from './AuthenticationHandler.js';
import { AuthenticationHandler } from './AuthenticationHandler.js';
import { UserHandler } from './UserHandler.js';

/// Implementation of the Telepact ServerHandler_
///
/// This default handler routes interface methods to their specific domain handlers
export class ServerHandler extends TypedServerHandler {
  private authenticationHandler = new AuthenticationHandler(userRepository);
  private userHandler = new UserHandler(userRepository);
  private announcementHandler = new AnnouncementHandler(announcementRepository);

  /* Authentication */

  override async login(
    headers: Record<string, any>,
    input: login.Input,
  ): Promise<TypedMessage<login.Output>> {
    return this.authenticationHandler.login(headers, input);
  }

  override async refresh(
    headers: Record<string, any>,
    input: refresh.Input,
  ): Promise<TypedMessage<refresh.Output>> {
    return this.authenticationHandler.refresh(headers, input);
  }

  /* Users */

  override async getUsers(
    headers: Record<string, any>,
    input: getUsers.Input,
  ): Promise<TypedMessage<getUsers.Output>> {
    return this.userHandler.getUsers(headers, input);
  }

  override async createUser(
    headers: Record<string, any>,
    input: createUser.Input,
  ): Promise<TypedMessage<createUser.Output>> {
    return this.userHandler.createUser(headers, input);
  }

  /* Announcements */

  override async getAnnouncements(
    headers: Record<string, any>,
    input: getAnnouncements.Input,
  ): Promise<TypedMessage<getAnnouncements.Output>> {
    return this.announcementHandler.getAnnouncements(headers, input);
  }

  override async createAnnouncement(
    headers: Record<string, any>,
    input: createAnnouncement.Input,
  ): Promise<TypedMessage<createAnnouncement.Output>> {
    return this.announcementHandler.createAnnouncement(headers, input);
  }
}
