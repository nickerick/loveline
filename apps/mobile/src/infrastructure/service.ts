import { UserService } from '../domain/user/UserService';
import { TelepactHttpService } from './TelepactHttpService';
// 'http://192.168.0.15:8082',
// http://172.20.10.4:8081
export const telepactService = new TelepactHttpService(
  'http://172.20.10.4:8082',
);
export const userService = new UserService(telepactService.client);
