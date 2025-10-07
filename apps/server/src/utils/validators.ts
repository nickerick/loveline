import { z } from 'zod';

export type ValidationResult =
  | { valid: true }
  | { valid: false; reason: string };

/* Validators */

export function validateUsername(username: string): ValidationResult {
  const result = usernameSchema.safeParse(username);
  if (!result.success)
    return { valid: false, reason: result.error.issues[0]!.message };
  return { valid: true };
}

export function validateEmail(email: string): ValidationResult {
  const result = emailSchema.safeParse(email);
  if (!result.success)
    return { valid: false, reason: result.error.issues[0]!.message };
  return { valid: true };
}

export function validatePassword(password: string): ValidationResult {
  const result = passwordSchema.safeParse(password);
  if (!result.success)
    return { valid: false, reason: result.error.issues[0]!.message };
  return { valid: true };
}

/* Schemas */

const usernameSchema = z
  .string()
  .min(3, { message: 'Username must be between 3 and 20 characters' })
  .max(20, { message: 'Username must be between 3 and 20 characters' })
  .regex(/^[A-Za-z0-9_]+$/, {
    message: 'Username can only contain letters, numbers, and underscores',
  });

const emailSchema = z.email({ message: 'Invalid email address' });

const passwordSchema = z
  .string()
  .min(12, { message: 'Password must be at least 12 characters long' })
  .max(256, { message: 'Password must be at max 256 characters long' });
