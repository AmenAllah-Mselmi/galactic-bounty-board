/* eslint-disable prettier/prettier */
import { IsString, Max } from "class-validator";
import { Min } from "class-validator";
export class CreateSignalDto {
    @IsString()
  message: string;
  @Max(100)
  @Min(0)
  frequency: number;
  @IsString()
  origin: string;
}
