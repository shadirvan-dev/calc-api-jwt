import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './login-user.dto';
import { UserResponseDto } from './user-response-dto';
import { UsersService } from 'src/users/users.service';
import { AuthResponseDto } from './auth-response.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) { }

    async authenticate(input: LoginDto): Promise<AuthResponseDto> {
        const user = await this.validateUser(input);

        if (!user) {
            throw new UnauthorizedException();
        }

        return {
            accessToken: 'fake-access',
            userId: user.userId,
            username: user.username
        }
    }

    async validateUser(input: LoginDto): Promise<UserResponseDto | null> {
        const user = await this.userService.findUserByName(input.username);
        if (user && user.password === input.password) {
            return {
                userId: user.userId,
                username: user.username,
            }
        }

        return null;

    }
}
