import { Body, Controller, NotImplementedException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login-user.dto';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
    constructor(@InjectRepository(User)
    private userRepo: Repository<User>, private authService: AuthService) { }

    @Post('login')
    login(@Body() input: LoginDto) {

        console.log('BODY:', input);
        return this.authService.authenticate(input);
    }

    @Post('register')
    async register(@Body() body: LoginDto) {
        const hash = await bcrypt.hash(body.password, 10);

        const user = this.userRepo.create({
            username: body.username,
            password: hash,
        });

        return this.userRepo.save(user);
    }
}
