import { IsNotEmpty, IsString, MinLength, minLength } from 'class-validator';

export class LoginDto {
    @MinLength(4)
    @IsString()
    @IsNotEmpty()
    username: string;


    @MinLength(8)
    @IsString()
    @IsNotEmpty()
    password: string;
}