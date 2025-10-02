import type { UserRepository } from '../data/repositories/UserRepository.js';
import { createUser, getUsers, User } from '../gen/telepact/genTypes.js';
import { unauthenticatedOutput, verifyToken } from '../auth/authentication.js';
import type { NewDbUser } from '../data/models/user.js';
import bcrypt from 'bcrypt';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '../utils/validators.js';

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
      const mappedUser = User.from({
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
      });
      responseUsers.push(mappedUser);
    });

    const output = getUsers.Output.from_Ok_({ users: responseUsers });

    return [{}, output];
  }

  async createUser(
    headers: Record<string, any>,
    input: createUser.Input,
  ): Promise<[Record<string, any>, createUser.Output]> {
    const usernameValidation = validateUsername(input.username());
    if (!usernameValidation.valid) {
      return [
        {},
        createUser.Output.from_InvalidUsername({
          reason: usernameValidation.reason,
        }),
      ];
    }

    const userExists = await this.userRepo.findByUsername(input.username());
    if (userExists) {
      return [
        {},
        createUser.Output.from_InvalidUsername({
          reason: 'This username is already taken!',
        }),
      ];
    }

    const emailValidation = validateEmail(input.email());
    if (!emailValidation.valid) {
      return [
        {},
        createUser.Output.from_InvalidEmail({
          reason: emailValidation.reason,
        }),
      ];
    }

    const passwordValidation = validatePassword(input.password());
    if (!passwordValidation.valid) {
      return [
        {},
        createUser.Output.from_InvalidPassword({
          reason: passwordValidation.reason,
        }),
      ];
    }

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

    const responseUser = User.from({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      firstName: newUser.first_name,
      lastName: newUser.last_name,
    });

    return [{}, createUser.Output.from_Ok_({ user: responseUser })];
  }
}
