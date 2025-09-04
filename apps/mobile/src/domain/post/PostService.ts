import { exampleFunction2, TelepactClient } from "../../infrastructure/TelepactService";
import { Post } from "./Post";

export class PostService {
  constructor(private client: TelepactClient) {}

  async getAllPosts(): Promise<Post[]> {
    const resp = await this.client.exampleFunction2(
      {}, 
      exampleFunction2.Input.fromTyped({ field: 4 })
    );

    return [Post.fromTelepact(resp[1])];
  }
}
