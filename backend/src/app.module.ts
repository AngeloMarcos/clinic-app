import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './modules/patient/patient.module';
import { ProfessionalModule } from "./modules/professional/professional.module";
import { AppointmentModule } from "./modules/Appointment/appointment.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'clinic',
      password: 'clinic123',
      database: 'clinicdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PatientModule,
    ProfessionalModule,
    AppointmentModule,
  ],
})
export class AppModule {}
