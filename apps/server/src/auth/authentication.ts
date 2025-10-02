import jwt, { type Secret, type JwtPayload } from 'jsonwebtoken';
import {
  TokenType,
  type AuthUser,
  type TypedJwtPayload,
  type AccessJwtPayload,
} from './types';
import bcrypt from 'bcrypt';

const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;
const ACCESS_TOKEN_LIFETIME = '30 mins';
const REFRESH_TOKEN_LIFETIME = '30 days';
const TOKEN_ISSUER = 'loveline-service';

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set in the environment');
}

/**
 * Generates an access JWT
 */
export function generateToken(userId: string): string {
  return jwt.sign({ sub: userId, type: TokenType.Access }, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_LIFETIME,
    issuer: TOKEN_ISSUER,
  });
}

/**
 * Generates a refresh JWT
 */
export function generateRefreshToken(userId: string): string {
  return jwt.sign({ sub: userId, type: TokenType.Refresh }, JWT_SECRET, {
    expiresIn: REFRESH_TOKEN_LIFETIME,
    issuer: TOKEN_ISSUER,
  });
}

/**
 * Verifies an access JWT from the request headers and returns its decoded payload.
 *
 * @param headers - The headers object from an incoming request, expected
 *   to contain the `@auth__` key with a JWT string.
 * @returns The decoded JWT payload as `AuthUser` if verification succeeds,
 *   or `null` if the token is missing, invalid, or cannot be decoded.
 */
export function verifyToken(headers: Record<string, any>): AuthUser | null {
  const token = headers['@auth__'];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AccessJwtPayload;

    if (decoded.type !== TokenType.Access) return null;

    return {
      id: decoded.sub!,
    };
  } catch (e) {
    return null;
  }
}

/**
 * Verifies a JWT from the request headers and returns the user id it's assigned to.
 *
 * @param token - The refresh JWT to verify
 * @returns The user id of the refresh JWT if verification succeeds,
 *   or `null` if the token is invalid or cannot be decoded.
 */
export function verifyRefreshToken(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TypedJwtPayload;

    if (decoded.type !== TokenType.Refresh) return null;

    return decoded.sub!;
  } catch {
    return null;
  }
}

/**
 * Hashes a plain text password using bcrypt.
 */
export function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

/**
 * Verifies if a plain text password matches a hashed password.
 */
export function verifyPassword(
  inputPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(inputPassword, hashedPassword);
}

/**
 * Generates a standard "unauthenticated" response tuple for RPC handlers.
 *
 * This returns a tuple `[headers, output]` where:
 * - `headers` is an empty object `{}`
 * - `output` is an instance of the given `OutputClass` representing an
 *   `ErrorUnauthenticated__` response.
 *
 * @template OutputType
 * @param OutputClass - The RPC Output class which must have a static method
 *   `from_ErrorUnauthenticated__` and an inner class `ErrorUnauthenticated__`.
 * @returns A tuple `[Record<string, any>, OutputType]` suitable for returning
 *   from a handler method when the caller is not authenticated.
 *
 * @example
 * ```ts
 * return unauthenticatedOutput(getUsers.Output);
 * // returns: [{}, getUsers.Output.from_ErrorUnauthenticated__(...)]
 * ```
 */
export function unauthenticatedOutput<OutputType>(OutputClass: {
  from_ErrorUnauthenticated__: (payload: any) => OutputType;
}): [Record<string, any>, OutputType] {
  return [
    {},
    OutputClass.from_ErrorUnauthenticated__(
      new (OutputClass as any).ErrorUnauthenticated__({}),
    ),
  ];
}
