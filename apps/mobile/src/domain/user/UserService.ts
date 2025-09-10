import {
  exampleFunction2,
  getUsers,
  TelepactClient,
} from "../../infrastructure/TelepactService";
import { User } from "./User";

export class UserService {
  constructor(private client: TelepactClient) {}

  async getAllUsers(): Promise<User[]> {
    const resp = await this.client.getUsers({}, getUsers.Input.fromTyped({}));

    if (resp[1].getTaggedValue().tag === "Ok_") {
      const apiUsers = (
        resp[1].getTaggedValue().value as getUsers.Output.Ok_
      ).users();
      return apiUsers.map(User.fromTelepact);
    }

    return [];
  }
}
