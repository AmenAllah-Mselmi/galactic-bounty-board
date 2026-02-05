import { Injectable } from '@nestjs/common';

@Injectable()
export class VaultService {
    private balance=0;
    deposit(amount:number):void{
        if(amount<=0){
            throw new Error('Deposit amount must be positive');
        }
        this.balance+=amount;
    }
   get getBalance():number{
        return this.balance;
    }
}
