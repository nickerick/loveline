import { User as User_ } from "@/src/gen/all_";

export class User {
  constructor(
    public id: string,
    public username: string,
    public email: string,
    public firstName: string,
    public lastName: string,
  ) {}

  static fromTelepact(user: User_): User {
    return new User(
      user.id(),
      user.username(),
      user.email(),
      user.firstName(),
      user.lastName(),
    );
  }
}
