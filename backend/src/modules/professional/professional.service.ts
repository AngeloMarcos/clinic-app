import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professional } from './professional.entity';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(Professional)
    private readonly professionalRepository: Repository<Professional>,
  ) {}

  findAll(): Promise<Professional[]> {
    return this.professionalRepository.find();
  }

  findOne(id: number): Promise<Professional> {
    return this.professionalRepository.findOneBy({ id });
  }

  create(professional: Professional): Promise<Professional> {
    return this.professionalRepository.save(professional);
  }

  async update(id: number, updated: Partial<Professional>): Promise<Professional> {
    await this.professionalRepository.update(id, updated);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.professionalRepository.delete(id);
  }
}
