import { getUsers, TelepactClient } from '../../infrastructure/TelepactService';
import { User } from './User';

export class UserService {
  constructor(private client: TelepactClient) {}

  async getAllUsers(): Promise<User[]> {
    console.log('service entry');

    try {
      console.log('service entryasdfadsf');
      const resp = await this.client.getUsers({}, getUsers.Input.from({}));

      console.log('service afaster');

      if (resp[1].getTaggedValue().tag === 'Ok_') {
        const users = (
          resp[1].getTaggedValue().value as getUsers.Output.Ok_
        ).users();

        console.log('service exit');
        console.log(users);
        return users.map(User.fromTelepact);
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

    console.log('service exit empty');
    return [];
  }
}
