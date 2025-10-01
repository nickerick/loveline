import type { UserRepository } from '../data/repositories/UserRepository.js';
import { login, refresh } from '../gen/telepact/all_.js';
import {
  unauthenticatedOutput,
  verifyToken,
} from '../infrastructure/authentication.js';

export class AuthenticationHandler {
  constructor(private readonly userRepo: UserRepository) {}

  async login(
    headers: Record<string, any>,
    input: login.Input,
  ): Promise<[Record<string, any>, login.Output]> {
    const password = input.password();
    const username = input.username();

    const accessToken = 'placeholder';

    const output = login.Output.from_Ok_(
      login.Output.Ok_.fromTyped({ accessToken: accessToken }),
    );

    return [{}, output];
  }

  async refresh(
    headers: Record<string, any>,
    input: refresh.Input,
  ): Promise<[Record<string, any>, refresh.Output]> {
    const accessToken = 'placeholder';

    const output = refresh.Output.from_Ok_(
      refresh.Output.Ok_.fromTyped({ accessToken: accessToken }),
    );

    return [{}, output];
  }
}
