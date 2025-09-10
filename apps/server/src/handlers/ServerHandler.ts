import { ServerHandler_, User, exampleFunction2, getUsers } from '../gen/all_.js';
import { userRepository } from '../infrastructure/repository.js';
import { UserHandler } from './UserHandler.js';

/// Implementation of the Telepact ServerHandler_
///
/// This default handler routes interface methods to their specific domain handlers
export class ServerHandler extends ServerHandler_ {
    private userHandler = new UserHandler(userRepository);

    override async exampleFunction2(headers: Record<string, any>, input: exampleFunction2.Input): Promise<[Record<string, any>, exampleFunction2.Output]> {

        let output = exampleFunction2.Output.from_Ok_(exampleFunction2.Output.Ok_.fromTyped({}));
        return [{}, output];
    }

    override async getUsers(headers: Record<string, any>, input: getUsers.Input): Promise<[Record<string, any>, getUsers.Output]> {
        return this.userHandler.getUsers(headers, input);
    }   
}