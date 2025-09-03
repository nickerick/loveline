import { exampleFunction2, TelepactClient } from "./TelepactService";

export class PostService {
  constructor(private client: TelepactClient) {}

  async getPostById(id: number) {
    const resp = await this.client.exampleFunction2(
      {}, 
      exampleFunction2.Input.fromTyped({ field: id })
    );

    const tagged = resp[1].getTaggedValue();
    return { tag: tagged.tag, value: tagged.value };
  }
}
