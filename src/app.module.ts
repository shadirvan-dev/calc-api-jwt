import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [MathModule, AuthModule, UsersModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite', // file created automatically
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // auto create tables (dev only)
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
