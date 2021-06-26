import { IsString, IsDefined } from 'class-validator';

export class CreateSetDto {
  @IsString()
  @IsDefined()
  title: string;

  @IsString()
  @IsDefined()
  description: string;
}
