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

        return a / b;
    }
}
