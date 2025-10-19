import type { UserRepository } from '../data/repositories/UserRepository.js';
import { createUser, getUsers, User } from '../gen/telepact/genTypes.js';
import {
  hashPassword,
  unauthenticatedOutput,
  verifyToken,
} from '../auth/authentication.js';
import type { NewDbUser } from '../data/models/user.js';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '../utils/validators.js';
import type { TypedMessage } from 'telepact';

export class UserHandler {
  constructor(private readonly userRepo: UserRepository) {}

  async getUsers(
    headers: Record<string, any>,
    input: getUsers.Input,
  ): Promise<TypedMessage<getUsers.Output>> {
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

    return {
      headers: {},
      body: getUsers.Output.from_Ok_({ users: responseUsers }),
    };
  }

  async createUser(
    headers: Record<string, any>,
    input: createUser.Input,
  ): Promise<TypedMessage<createUser.Output>> {
    const validationError = await this.validateUserInput(input);
    if (validationError) {
      const { field, reason } = validationError;
      switch (field) {
        case 'username':
          return {
            headers: {},
            body: createUser.Output.from_InvalidUsername({ reason }),
          };
        case 'email':
          return {
            headers: {},
            body: createUser.Output.from_InvalidEmail({ reason }),
          };
        case 'password':
          return {
            headers: {},
            body: createUser.Output.from_InvalidPassword({ reason }),
          };
      }
    }

    const passwordHash = await hashPassword(input.password());
    const newDbUser: NewDbUser = {
      username: input.username(),
      email: input.email(),
      first_name: input.firstName(),
      last_name: input.lastName(),
      password_hash: passwordHash,
    };

    const newUser = await this.userRepo.create(newDbUser);
    const responseUser = User.from({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      firstName: newUser.first_name,
      lastName: newUser.last_name,
    });

    return {
      headers: {},
      body: createUser.Output.from_Ok_({ user: responseUser }),
    };
  }

  async validateUserInput(input: createUser.Input) {
    const username = validateUsername(input.username());
    if (!username.valid) return { field: 'username', reason: username.reason };

    const usernameExists = await this.userRepo.findByUsername(input.username());
    if (usernameExists)
      return { field: 'username', reason: 'This username is already taken' };

    const email = validateEmail(input.email());
    if (!email.valid) return { field: 'email', reason: email.reason };

    const password = validatePassword(input.password());
    if (!password.valid) return { field: 'password', reason: password.reason };

    return null;
  }
}
