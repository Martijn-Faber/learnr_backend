import { IsEmail, IsString, IsDefined } from 'class-validator';
export class CreatePairDto {
  @IsString()
  @IsDefined()
  term: string;

  @IsString()
  @IsDefined()
  definition: string;
}
