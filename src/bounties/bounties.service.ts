import { Injectable } from '@nestjs/common';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { UpdateBountyDto } from './dto/update-bounty.dto';
import { Bounty } from './entities/bounty.entity';

@Injectable()
export class BountiesService {
  Bounties: Bounty[] = [];
  create(createBountyDto: CreateBountyDto) {
    const newBounty: Bounty = {
      id: this.Bounties.length + 1,
      reward: createBountyDto.reward,
    };
    this.Bounties.push(newBounty);
    return newBounty;
  }

  findAll() {
    return this.Bounties;
  }

  findOne(id: number) {
    return this .Bounties.find((bounty)=>
       bounty.id===id
    )
  }

  update(id: number, updateBountyDto: UpdateBountyDto) {
    const bountyIndex = this.Bounties.findIndex(bounty => bounty.id === id);
    if (bountyIndex !== -1) {
      this.Bounties[bountyIndex] = { ...this.Bounties[bountyIndex], ...updateBountyDto };
    }
  }

  remove(id: number) {
    this.Bounties = this.Bounties.filter(bounty => bounty.id !== id);
  }
}
