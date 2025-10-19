import type { UserRepository } from '../data/repositories/UserRepository.js';
import { login, refresh } from '../gen/telepact/genTypes.js';
import {
  generateRefreshToken,
  generateToken,
  verifyPassword,
  verifyRefreshToken,
} from '../auth/authentication.js';
import type { TypedMessage } from 'telepact';

export class AuthenticationHandler {
  constructor(private readonly userRepo: UserRepository) {}

  async login(
    headers: Record<string, any>,
    input: login.Input,
  ): Promise<TypedMessage<login.Output>> {
    const user = await this.userRepo.findByUsername(input.username());
    if (!user)
      return { headers: {}, body: login.Output.from_InvalidCredentials({}) };

    const isMatch = await verifyPassword(input.password(), user.password_hash);
    if (!isMatch)
      return { headers: {}, body: login.Output.from_InvalidCredentials({}) };

    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    return {
      headers: {},
      body: login.Output.from_Ok_({
        accessToken: accessToken,
        refreshToken: refreshToken,
      }),
    };
  }

  async refresh(
    headers: Record<string, any>,
    input: refresh.Input,
  ): Promise<TypedMessage<refresh.Output>> {
    const user = verifyRefreshToken(input.refreshToken());
    if (!user)
      return { headers: {}, body: refresh.Output.from_InvalidCredentials({}) };

    const accessToken = generateToken(user);

    return {
      headers: {},
      body: refresh.Output.from_Ok_({ accessToken: accessToken }),
    };
  }
}
