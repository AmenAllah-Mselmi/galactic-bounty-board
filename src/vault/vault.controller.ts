import { Body, Controller, Get, Post } from '@nestjs/common';
import { VaultService } from './vault.service';

@Controller('vault')
export class VaultController {
    constructor(private vaultService: VaultService){}
    @Post('deposit')
    deposit(@Body('amount') amount: number) {
        this.vaultService.deposit(amount);
    }
    @Get('balance')
    getBalance(): number {
        return this.vaultService.getBalance;
    }
}
