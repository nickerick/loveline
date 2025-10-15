import { Client, ClientOptions, Message, Serializer } from 'telepact';
import {
  ClientInterface_,
  createAnnouncement,
  createUser,
  getAnnouncements,
  getUsers,
  login,
} from '../gen/telepact/genTypes';

const adapter: (m: Message, s: Serializer) => Promise<Message> = async (
  m,
  s,
) => {
  // Debug
  console.log('Message');
  console.log(m);
  console.log('\n');

  const requestBytes = s.serialize(m);
  console.log('Serialized bytes');
  console.log(requestBytes);
  console.log('\n');

  const deserializedMessage = s.deserialize(requestBytes);
  console.log('Deserialized message');
  console.log(deserializedMessage);
  console.log('\n');

  const response = await fetch('http://localhost:8082/api/telepact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      Accept: 'application/octet-stream',
    },
    body: Buffer.from(requestBytes),
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

// const resp = await genClient.getUsers({}, getUsers.Input.fromTyped({}));
// const resp = await genClient.createAnnouncement(
//   {},
//   createAnnouncement.Input.fromTyped({ message: 'bob', author: 'bobcena' }),
// );
// const resp = await genClient.getAnnouncements(
//   {},
//   getAnnouncements.Input.fromTyped({}),
// );

// if (resp[1].getTaggedValue().tag === 'Ok_') {
//   const users = (
//     resp[1].getTaggedValue().value as getAnnouncements.Output.Ok_
//   ).announcements();
//   // const users = (resp[1].getTaggedValue().value as getUsers.Output.Ok_).users();
//   console.log('Users:');
//   console.dir(users, { depth: null });
// } else {
//   console.log('Error response:');
//   console.dir(resp[1].getTaggedValue().value, { depth: null });
// }

const resp = await genClient.createUser(
  {},
  createUser.Input.from({
    username: 'testufsfaser1',
    email: 'testuserff@gmail.co',
    firstName: 'john',
    lastName: 'doe',
    password: 'mypasswohkhkhkhrd',
  }),
);

if (resp[1].getTaggedValue().tag === 'Ok_') {
  const users = (
    resp[1].getTaggedValue().value as createUser.Output.Ok_
  ).user();
  // const users = (resp[1].getTaggedValue().value as getUsers.Output.Ok_).users();
  console.log('Users:');
  console.dir(users, { depth: null });
} else {
  console.log('Error response:');
  console.dir(resp[1].getTaggedValue().value, { depth: null });
}

// LOGIN
// const resp = await genClient.login(
//   {},
//   login.Input.fromTyped({username: "testuser1", password: "mypassword"}),
// );

// if (resp[1].getTaggedValue().tag === 'Ok_') {
//   const users = (
//     resp[1].getTaggedValue().value as login.Output.Ok_
//   );

//   // const users = (resp[1].getTaggedValue().value as getUsers.Output.Ok_).users();
//   console.log('Users:');
//   console.dir(users, { depth: null });
// } else {
//   console.log('Error response:');
//   console.dir(resp[1].getTaggedValue().value, { depth: null });
// }

// LOGIN
// const resp = await genClient.getAnnouncements(
//   {
//     '@auth__':
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMmUzOGFkYS0wOGI2LTRjOWEtYTUxZS1iNDdlZjFkYWMxOWQiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzU5MjkyNzg4LCJleHAiOjE3NTkyOTQ1ODgsImlzcyI6ImxvdmVsaW5lLXNlcnZpY2UifQ.mMpZV-wIrN1haPUL1WMcv_hxdXIDf6-DwwieEVwdkUI',
//   },
//   getAnnouncements.Input.from({}),
// );

// if (resp[1].getTaggedValue().tag === 'Ok_') {
//   const users = (
//     resp[1].getTaggedValue().value as getAnnouncements.Output.Ok_
//   ).announcements();
//   // const users = (resp[1].getTaggedValue().value as getUsers.Output.Ok_).users();
//   console.log('Users:');
//   console.dir(users, { depth: null });
// } else {
//   console.log('Error response:');
//   console.dir(resp[1].getTaggedValue().value, { depth: null });
// }

// Debug
// console.log('Telepact Response');
// console.log(resp);
// console.log('\n');
// console.log(resp[1].pseudoJson);
// console.log('\n')
// console.log(resp[1].getTaggedValue());
// console.log('\n')
// console.log(resp[1].getTaggedValue().tag);
// console.log('\n')
// console.log(resp[1].getTaggedValue().value as getUsers.Output.Ok_);

// console.log(resp[1].getTaggedValue().value as Record<string, any>['cases']);
// console.dir(resp[1].getTaggedValue().value, { depth: null });
