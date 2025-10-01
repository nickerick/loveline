import type { UserRepository } from '../data/repositories/UserRepository.js';
import { createUser, getUsers, User } from '../gen/telepact/all_.js';
import { unauthenticatedOutput, verifyToken } from '../auth/authentication.js';
import type { NewDbUser } from '../data/models/user.js';
import bcrypt from 'bcrypt';

export class UserHandler {
  constructor(private readonly userRepo: UserRepository) {}

  async getUsers(
    headers: Record<string, any>,
    input: getUsers.Input,
  ): Promise<[Record<string, any>, getUsers.Output]> {
    const user = verifyToken(headers);
    if (!user) return unauthenticatedOutput(getUsers.Output);

    const allUsers = await this.userRepo.findAll();

    const responseUsers: User[] = [];
    allUsers.forEach((user) => {
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

  async createUser(
    headers: Record<string, any>,
    input: createUser.Input,
  ): Promise<[Record<string, any>, createUser.Output]> {
    const saltRounds = 10;
    const hash = await bcrypt.hash(input.password(), saltRounds);

    const newDbUser: NewDbUser = {
      username: input.username(),
      email: input.email(),
      first_name: input.firstName(),
      last_name: input.lastName(),
      password_hash: hash,
    };

    const newUser = await this.userRepo.create(newDbUser);

    const responseUser = User.fromTyped({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      firstName: newUser.first_name,
      lastName: newUser.last_name,
    });

    const output = createUser.Output.from_Ok_(
      createUser.Output.Ok_.fromTyped({ user: responseUser }),
    );

    return [{}, output];
  }
}
