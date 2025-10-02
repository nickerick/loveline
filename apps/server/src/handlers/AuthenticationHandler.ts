import type { UserRepository } from '../data/repositories/UserRepository.js';
import { login, refresh } from '../gen/telepact/genTypes.js';
import {
  generateRefreshToken,
  generateToken,
  verifyRefreshToken,
} from '../auth/authentication.js';
import bcrypt from 'bcrypt';

export class AuthenticationHandler {
  constructor(private readonly userRepo: UserRepository) {}

  async login(
    headers: Record<string, any>,
    input: login.Input,
  ): Promise<[Record<string, any>, login.Output]> {
    const user = await this.userRepo.findByUsername(input.username());
    if (!user) return [{}, login.Output.from_InvalidCredentials({})];

    const isMatch = await bcrypt.compare(input.password(), user.password_hash);
    if (!isMatch) return [{}, login.Output.from_InvalidCredentials({})];

    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    return [
      {},
      login.Output.from_Ok_({
        accessToken: accessToken,
        refreshToken: refreshToken,
      }),
    ];
  }

  async refresh(
    headers: Record<string, any>,
    input: refresh.Input,
  ): Promise<[Record<string, any>, refresh.Output]> {
    const user = verifyRefreshToken(input.refreshToken());
    if (!user) return [{}, refresh.Output.from_InvalidCredentials({})];

    const accessToken = generateToken(user);

    return [{}, refresh.Output.from_Ok_({ accessToken: accessToken })];
  }
}
