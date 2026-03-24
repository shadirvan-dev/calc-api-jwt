import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './login-user.dto';
import { UserResponseDto } from './user-response-dto';
import { AuthResponseDto } from './auth-response.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(User)
    private userRepo: Repository<User>, private jwtService: JwtService) { }

    async authenticate(input: LoginDto): Promise<AuthResponseDto> {
        const user = await this.validateUser(input);

        if (!user) {
            throw new UnauthorizedException("Invalid Credentials");
        }

        return this.signIn(user);
    }

    async validateUser(input: LoginDto): Promise<UserResponseDto | null> {

        const user = await this.findUser(input.username);
        if (user) {
            const isCorrect = await bcrypt.compare(input.password, user.password);
            if (isCorrect) {

                return {
                    userId: user.id,
                    username: user.username,
                };

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

    async findUser(username: string): Promise<User | null> {


        const user = await this.userRepo.findOne({ where: { username } });

        return user;
    }

}
