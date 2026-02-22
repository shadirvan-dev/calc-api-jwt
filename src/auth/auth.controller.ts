import { Body, Controller, NotImplementedException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    login(@Body() input: LoginDto) {
        return this.authService.authenticate(input);
    }
}
