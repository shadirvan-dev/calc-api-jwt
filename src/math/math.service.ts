import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
    add(a: number, b: number) {
        return a + b;

    }
    substract(a: number, b: number) {
        return a - b;
    }

    multiply(a: number, b: number) {
        return a * b;
    }

    divide(a: number, b: number) {
        if (b === 0) {
            throw new BadRequestException("Division by Zero is not allowed")
        }
        return a / b;
    }
}
