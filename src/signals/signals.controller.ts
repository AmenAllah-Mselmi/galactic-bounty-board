import { Body, Controller, Post } from '@nestjs/common';
import { CreateSignalDto } from './create-signal.dto';

@Controller('signals')
export class SignalsController {
 @Post()
 send(@Body() CreateSignalDto: CreateSignalDto):string{
    return `Signal received from ${CreateSignalDto.origin} on frequency [${CreateSignalDto.frequency}]!`
 }   
}
