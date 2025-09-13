import { ClientInterface_ as TelepactClient } from '../gen/all_';

export interface TelepactService {
  client: TelepactClient;
}

export {
  ClientInterface_ as TelepactClient,
  ping,
  getUsers,
  getAnnouncements,
  createAnnouncement,
} from '../gen/all_';
