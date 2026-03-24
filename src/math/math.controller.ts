import { BadRequestException, Controller, Get, Query, UseGuards } from '@nestjs/common';
import { MathService } from './math.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { InputDto } from './dto/input.dto';


@UseGuards(AuthGuard)
@Controller()
export class MathController {
    constructor(private mathService: MathService) { }

    @Get('add')
    add(@Query() query: InputDto) {


        return { result: this.mathService.add(query.a, query.b) }
    }

    @Get('substract')
    substract(@Query() query: InputDto) {


        return { result: this.mathService.substract(query.a, query.b) }

    }

    @Get('multiply')
    multiply(@Query() query: InputDto) {


        return { result: this.mathService.multiply(query.a, query.b) }

    }

    @Get('divide')
    divide(@Query() query: InputDto) {


        return { result: this.mathService.divide(query.a, query.b) }

    }

}
