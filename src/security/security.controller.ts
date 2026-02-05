import { Controller, Get, UseGuards } from '@nestjs/common';
import { clear } from 'console';
import { ClearanceGuard } from 'src/auth/clearance/clearance.guard';

@Controller('security')
export class SecurityController {
    @Get('data')
    @UseGuards(ClearanceGuard)
    getData() {
        return { message: 'Security data retrieved successfully!' };
    }
}
