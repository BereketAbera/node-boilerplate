// src/users/usersService.ts
export interface User {
    id: number;
    email: string;
    name: string;
    status?: 'HAPPY' | 'SAD';
    phoneNumbers: string[]
}

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;