import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { BadRequestException } from '@nestjs/common';

export class InputDto {
    @Transform(({ value }) => {
        if (value === '') {
            throw new BadRequestException('a or b cannot be empty');
        }
        return Number(value);
    })
    @IsNumber()
    a: number;

    @Transform(({ value }) => {
        if (value === '') {
            throw new BadRequestException('a or b cannot be empty');
        }
        return Number(value);
    })
    @IsNumber()
    b: number;
}