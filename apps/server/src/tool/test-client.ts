import { Client, ClientOptions, Message, Serializer } from 'telepact';
import {
  TypedClient,
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
const genClient = new TypedClient(client);

// const resp = await genClient.getUsers({}, getUsers.Input.fromTyped({}));
// const resp = await genClient.createAnnouncement(
//   {},
//   createAnnouncement.Input.fromTyped({ message: 'bob', author: 'bobcena' }),
// );
// const resp = await genClient.getAnnouncements(
//   {},
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

// const resp = await genClient.createUser(
//   {},
//   createUser.Input.from({
//     username: 'admin',
//     email: 'admin@gmail.com',
//     firstName: 'Admin',
//     lastName: 'User',
//     password: 'adminpassword',
//   }),
// );

// if (resp[1].getTaggedValue().tag === 'Ok_') {
//   const users = (
//     resp[1].getTaggedValue().value as createUser.Output.Ok_
//   ).user();
//   // const users = (resp[1].getTaggedValue().value as getUsers.Output.Ok_).users();
//   console.log('Users:');
//   console.dir(users, { depth: null });
// } else {
//   console.log('Error response:');
//   console.dir(resp[1].getTaggedValue().value, { depth: null });
// }

// LOGIN
// const resp = await genClient.login(
//   {},
//   login.Input.from({ username: 'testuser1', password: 'mypassword' }),
// );

// if (resp[1].getTaggedValue().tag === 'Ok_') {
//   const users = resp[1].getTaggedValue().value as login.Output.Ok_;

//   // const users = (resp[1].getTaggedValue().value as getUsers.Output.Ok_).users();
//   console.log('Users:');
//   console.dir(users, { depth: null });
// } else {
//   console.log('Error response:');
//   console.dir(resp[1].getTaggedValue().value, { depth: null });
// }

// LOGIN
const resp = await genClient.getAnnouncements(
  {
    '@auth__':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMmUzOGFkYS0wOGI2LTRjOWEtYTUxZS1iNfDdlZjFkYWMxOWQiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzU5ODAwMTY1LCJleHAiOjE3NTk4MDE5NjUsImlzcyI6ImxvdmVsaW5lLXNlcnZpY2UifQ.hbF9JUGaQayiUGW9LAx--OGZC1A35AnBa_1kFH1qeLw',
  },
  getAnnouncements.Input.from({}),
);

if (resp.body.getTaggedValue().tag === 'Ok_') {
  const users = (
    resp.body.getTaggedValue().value as getAnnouncements.Output.Ok_
  ).announcements();
  // const users = (resp[1].getTaggedValue().value as getUsers.Output.Ok_).users();
  console.log('Users:');
  console.dir(users, { depth: null });
} else {
  console.log('Error response:');
  console.dir(resp.body.getTaggedValue().value, { depth: null });
}

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
