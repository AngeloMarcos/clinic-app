import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Patient } from '../patient/patient.entity'
import { Professional } from '../professional/professional.entity'

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  data!: string

  @Column()
  hora!: string

  @Column()
  motivo!: string

  @ManyToOne(() => Patient, { eager: true })
  paciente!: Patient

  @ManyToOne(() => Professional, { eager: true })
  profissional!: Professional
}
