import { AnnouncementRepository } from '../data/repositories/AnnouncementRepository.js';
import { UserRepository } from '../data/repositories/UserRepository.js';
import { db } from './db.js';

export const userRepository = new UserRepository(db);
export const announcementRepository = new AnnouncementRepository(db);
