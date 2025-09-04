import { PostService } from '../domain/post/PostService';
import { TelepactHttpService } from './TelepactHttpService';

export const telepactService = new TelepactHttpService("http://localhost:8081");
export const postsService = new PostService(telepactService.client);