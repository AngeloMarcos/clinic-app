import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Patient } from './patient.entity'

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private repo: Repository<Patient>
  ) {}

  findAll() {
    return this.repo.find()
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id })
  }

  create(data: Partial<Patient>) {
    const patient = this.repo.create(data)
    return this.repo.save(patient)
  }

  update(id: number, data: Partial<Patient>) {
    return this.repo.update(id, data)
  }

  delete(id: number) {
    return this.repo.delete(id)
  }
}
