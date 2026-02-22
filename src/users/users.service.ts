import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
    // mock user data
    // TODO: Fetch Users From the Database.
    private readonly users: CreateUserDto[] = [
        { userId: 1, username: "shadirvan", password: "test123" },
        { userId: 2, username: "jacob", password: "jacob123" }

    ]

    async findUserByName(username: string): Promise<CreateUserDto | undefined> {
        return this.users.find((user) => user.username === username);
    }


}
