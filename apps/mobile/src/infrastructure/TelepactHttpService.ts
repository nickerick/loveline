import { Client, ClientOptions, Message, Serializer } from "telepact";
import { TelepactService, TelepactClient } from "./TelepactService";

export class TelepactHttpService implements TelepactService {
  client: TelepactClient;

  constructor(private baseUrl: string) {
    const adapter = async (m: Message, s: Serializer): Promise<Message> => {
      const requestBytes = s.serialize(m);

      const response = await fetch(`${this.baseUrl}/api/telepact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          "Accept": "application/octet-stream",
        },
        body: Buffer.from(requestBytes),
      });

      const responseBytes = new Uint8Array(await response.arrayBuffer());
      return s.deserialize(responseBytes);
    };

    const telepactClient = new Client(adapter, new ClientOptions());
    this.client = new TelepactClient(telepactClient);
  }
}
