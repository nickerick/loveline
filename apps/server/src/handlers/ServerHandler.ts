import { ServerHandler_, User, getUsers } from '../gen/all_.js';
import { userRepository } from '../infrastructure/repository.js';
import { UserHandler } from './UserHandler.js';

/// Implementation of the Telepact ServerHandler_
///
/// This default handler routes interface methods to their specific domain handlers
export class ServerHandler extends ServerHandler_ {
  private userHandler = new UserHandler(userRepository);

  override async getUsers(
    headers: Record<string, any>,
    input: getUsers.Input,
  ): Promise<[Record<string, any>, getUsers.Output]> {
    return this.userHandler.getUsers(headers, input);
  }
}
