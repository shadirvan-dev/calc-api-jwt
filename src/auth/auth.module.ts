import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UsersModule,
    JwtModule.register(
      {
        global: true,
        // TODO : change secret and outsource to some .env file.
        secret: "supersecretchangemelater",
        signOptions: { expiresIn: '3d' },
      }
    )
  ]
})
export class AuthModule { }
