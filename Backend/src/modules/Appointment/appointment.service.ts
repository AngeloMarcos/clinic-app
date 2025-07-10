import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Appointment } from './appointment.entity'

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private repo: Repository<Appointment>
  ) {}

  findAll() {
    return this.repo.find()
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id })
  }

  create(data: Partial<Appointment>) {
    const appointment = this.repo.create(data)
    return this.repo.save(appointment)
  }

  update(id: number, data: Partial<Appointment>) {
    return this.repo.update(id, data)
  }

  delete(id: number) {
    return this.repo.delete(id)
  }
}
