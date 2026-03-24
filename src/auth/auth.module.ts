import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';

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
    ),
    TypeOrmModule.forFeature([User])
  ]
})
export class AuthModule { }
