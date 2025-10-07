import { ClientInterface_ as TelepactClient } from '../gen/genTypes';

export interface TelepactService {
  client: TelepactClient;
}

export {
  ClientInterface_ as TelepactClient,
  ping,
  getUsers,
  getAnnouncements,
  createAnnouncement,
  login,
  refresh,
  createUser,
} from '../gen/genTypes';
