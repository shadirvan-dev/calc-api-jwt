import { Controller, Get, Query } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class MathController {
    constructor(private mathService: MathService) { }

    @Get('add')
    add(@Query('a') a: string, @Query('b') b: string) {
        return { result: this.mathService.add(+a, +b) }
    }

    @Get('substract')
    substract(@Query('a') a: string, @Query('b') b: string) {
        return { result: this.mathService.substract(+a, +b) }

    }

    @Get('multiply')
    multiply(@Query('a') a: string, @Query('b') b: string) {
        return { result: this.mathService.multiply(+a, +b) }

    }

    @Get('divide')
    divide(@Query('a') a: string, @Query('b') b: string) {
        return { result: this.mathService.divide(+a, +b) }

    }

}
