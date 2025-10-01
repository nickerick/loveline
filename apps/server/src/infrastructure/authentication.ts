import jwt, { type Secret, type JwtPayload } from 'jsonwebtoken';

const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set in the environment');
}

/**
 * Verifies a JWT from the request headers and returns its decoded payload.
 *
 * @param headers - The headers object from an incoming request, expected
 *   to contain the `@auth__` key with a JWT string.
 * @returns The decoded JWT payload as `JwtPayload` if verification succeeds,
 *   or `null` if the token is missing, invalid, or cannot be decoded.
 */
export function verifyToken(headers: Record<string, any>): JwtPayload | null {
  const token = headers['@auth__'];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded === 'string') {
      return null;
    }
    return decoded;
  } catch (e) {
    return null;
  }
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
