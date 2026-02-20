import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class MathController {
    @Get('add')
    add(@Query('a') a: string, @Query('b') b: string) {
        return `a is ${a} and b is ${b}`
    }

    @Get('substract')
    substract(@Query('a') a: string, @Query('b') b: string) {
        return `a is ${a} and b is ${b}`

    }

    @Get('multiply')
    multiply(@Query('a') a: string, @Query('b') b: string) {
        return `a is ${a} and b is ${b}`

    }

    @Get('divide')
    divide(@Query('a') a: string, @Query('b') b: string) {
        return `a is ${a} and b is ${b}`

    }

}
