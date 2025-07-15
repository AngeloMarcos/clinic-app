import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Professional {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  nome!: string

  @Column()
  especialidade!: string
}
