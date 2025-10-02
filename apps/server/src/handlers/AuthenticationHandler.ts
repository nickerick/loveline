import type { UserRepository } from '../data/repositories/UserRepository.js';
import { login, refresh } from '../gen/telepact/genTypes.js';
import { generateRefreshToken, generateToken } from '../auth/authentication.js';
import bcrypt from 'bcrypt';

export class AuthenticationHandler {
  constructor(private readonly userRepo: UserRepository) {}

  async login(
    headers: Record<string, any>,
    input: login.Input,
  ): Promise<[Record<string, any>, login.Output]> {
    const user = await this.userRepo.findByUsername(input.username());
    if (!user) return invalidCredentialsResponse();

    const isMatch = await bcrypt.compare(input.password(), user.password_hash);
    if (!isMatch) return invalidCredentialsResponse();

    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    const output = login.Output.from_Ok_({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });

    return [{}, output];
  }

  async refresh(
    headers: Record<string, any>,
    input: refresh.Input,
  ): Promise<[Record<string, any>, refresh.Output]> {
    const accessToken = 'placeholder';

    const output = refresh.Output.from_Ok_({ accessToken: accessToken });

    return [{}, output];
  }
}

const invalidCredentialsResponse = (): [Record<string, any>, login.Output] => [
  {},
  login.Output.from_InvalidCredentials({}),
];
