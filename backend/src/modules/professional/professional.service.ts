import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professional } from './professional.entity';
import { CreateProfessionalDto } from './dto/create-professional.dto';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(Professional)
    private readonly professionalRepository: Repository<Professional>,
  ) {}

  async create(dto: CreateProfessionalDto): Promise<Professional> {
    const professional = this.professionalRepository.create(dto);
    return await this.professionalRepository.save(professional);
  }

  async findAll(): Promise<Professional[]> {
    return await this.professionalRepository.find();
  }

  async findOne(id: number): Promise<Professional> {
    const professional = await this.professionalRepository.findOne({ where: { id } });
    if (!professional) {
      throw new NotFoundException(`Profissional com ID ${id} não encontrado.`);
    }
    return professional;
  }
}
