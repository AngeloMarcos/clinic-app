import { IsNotEmpty, IsUUID, IsDateString } from 'class-validator';

export class CreateAppointmentDto {
  @IsUUID()
  @IsNotEmpty()
  patientId: string;

  @IsUUID()
  @IsNotEmpty()
  professionalId: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;
}
