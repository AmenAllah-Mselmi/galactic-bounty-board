import { Min } from "class-validator";


export class CreateBountyDto {
    @Min(1000)
    reward: number;
}
