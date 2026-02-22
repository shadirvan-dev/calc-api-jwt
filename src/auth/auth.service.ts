import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './login-user.dto';
import { UserResponseDto } from './user-response-dto';
import { UsersService } from 'src/users/users.service';
import { AuthResponseDto } from './auth-response.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async authenticate(input: LoginDto): Promise<AuthResponseDto> {
        const user = await this.validateUser(input);

        if (!user) {
            throw new UnauthorizedException();
        }

        return this.signIn(user)
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

    async signIn(user: UserResponseDto): Promise<AuthResponseDto> {

        const tokenPayload = {
            sub: user.userId,
            username: user.username
        };
        const accessToken = await this.jwtService.signAsync(tokenPayload);
        return { accessToken, username: user.username, userId: user.userId }
    }
}
