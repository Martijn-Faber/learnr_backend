import { IsString, IsDefined } from 'class-validator';

export class UpdateSetDto {
  @IsString()
  @IsDefined()
  title: string;

  @IsString()
  @IsDefined()
  description: string;
}
