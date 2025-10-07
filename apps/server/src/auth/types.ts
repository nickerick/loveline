import type { JwtPayload } from 'jsonwebtoken';

export enum TokenType {
  Access = 'access',
  Refresh = 'refresh',
}

/**
 * Represents the decoded JWT payload for an authenticated user.
 */
export interface AuthUser {
  id: string;
}

/**
 * A JWT with a type identifier (access or refresh)
 */
export interface TypedJwtPayload extends JwtPayload {
  type: TokenType;
}

/**
 * A JWT with additional access token fields
 */
export interface AccessJwtPayload extends TypedJwtPayload {}
