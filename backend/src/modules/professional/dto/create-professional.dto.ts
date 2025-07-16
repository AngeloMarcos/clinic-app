import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProfessionalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  specialty: string;
}
