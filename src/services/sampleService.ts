import { User, UserCreationParams } from "../reqModels/user";

export class UsersService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "HAPPY",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "HAPPY",
      ...userCreationParams,
    };
  }

  public getUsers(): User[] {
    return [{
      id: 1,
      email: "jane@doe.com",
      name: "Jane Doe",
      status: "HAPPY",
      phoneNumbers: [],
    }];
  }
}