import {
    Client,
    ClientOptions,
    Message,
    Serializer,
} from "telepact";
import { ClientInterface_, ping2 } from "./gen/all_";

const adapter: (m: Message, s: Serializer) => Promise<Message> = async (m, s) => {
    // Debug
    console.log('Message');
    console.log(m)
    console.log('\n');

    const requestBytes = s.serialize(m);
    console.log('Serialized bytes');
    console.log(requestBytes)
    console.log('\n');

    const deserializedMessage = s.deserialize(requestBytes);
    console.log('Deserialized message');
    console.log(deserializedMessage);
    console.log('\n');

    const response = await fetch("http://localhost:8081/api/telepact", {
        method: "POST",
        headers: {
            'Content-Type': 'application/octet-stream',
            'Accept': 'application/octet-stream'
        },
        body: Buffer.from(requestBytes)
    });

    // Debug
    console.log('HTTP response');
    console.log(response);
    console.log('\n');

    const responseBytes = new Uint8Array(await response.arrayBuffer());
    return s.deserialize(responseBytes);
};

const options = new ClientOptions();
const client = new Client(adapter, options);
const genClient = new ClientInterface_(client);

// Make telepact request
const resp = await genClient.ping2({}, ping2.Input.fromTyped({}));

// Debug
console.log('Telepact Response');
console.log(resp);
console.log('\n');
console.log(resp[1].pseudoJson);
console.log('\n')
console.log(resp[1].getTaggedValue());
console.log('\n')
console.log(resp[1].getTaggedValue().tag);
console.log('\n')
console.log(resp[1].getTaggedValue().value);