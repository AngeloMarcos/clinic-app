import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PatientModule } from './modules/patient/patient.module'
import { Patient } from './modules/patient/patient.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'clinic',
      password: 'clinic123',
      database: 'clinicdb',
      entities: [Patient],
      synchronize: true,
    }),
    PatientModule,
  ],
})
export class AppModule {}
