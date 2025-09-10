import type { UserRepository } from "../data/repositories/UserRepository";
import { getUsers, User } from "../gen/all_";

export class UserHandler {
  constructor(private readonly userRepo: UserRepository) {}

  async getUsers(
    headers: Record<string, any>,
    input: getUsers.Input,
  ): Promise<[Record<string, any>, getUsers.Output]> {
    const allUsers = await this.userRepo.findAll();

    const responseUsers: User[] = [];
    allUsers?.forEach((user) => {
      const mappedUser = User.fromTyped({
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
      });
      responseUsers.push(mappedUser);
    });

    const output = getUsers.Output.from_Ok_(
      getUsers.Output.Ok_.fromTyped({ users: responseUsers }),
    );
    return [{}, output];
  }

  // other posts-related function
}
