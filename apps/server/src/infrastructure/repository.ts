import { AnnouncementRepository } from '../data/repositories/AnnouncementRepository';
import { UserRepository } from '../data/repositories/UserRepository';
import { db } from './db';

export const userRepository = new UserRepository(db);
export const announcementRepository = new AnnouncementRepository(db);
