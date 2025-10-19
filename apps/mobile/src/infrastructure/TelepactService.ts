import { TypedClient as TelepactClient } from '../gen/telepact/genTypes';

export interface TelepactService {
  client: TelepactClient;
}

export {
  TypedClient as TelepactClient,
  ping,
  getUsers,
  getAnnouncements,
  createAnnouncement,
  login,
  refresh,
  createUser,
} from '../gen/telepact/genTypes';
