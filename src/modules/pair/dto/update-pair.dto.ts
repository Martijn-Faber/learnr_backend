import { IsString, IsDefined } from 'class-validator';
export class UpdatePairDto {
  @IsString()
  @IsDefined()
  term: string;

  @IsString()
  @IsDefined()
  definition: string;
}
