import { getUsers, User } from "../gen/all_";

export class UserHandler {
  async getUsers(
    headers: Record<string, any>,
    input: getUsers.Input
  ): Promise<[Record<string, any>, getUsers.Output]> {

    const users: User[] = [];
    users.push(User.fromTyped({ id: "id-1", username: "default-user", email: "default-email", firstName: "Default", lastName: "User" }));
    console.log(users);

    const output = getUsers.Output.from_Ok_(getUsers.Output.Ok_.fromTyped({users: users}));
    console.log(output);
    return [{}, output];
  }

  // other posts-related function
}
