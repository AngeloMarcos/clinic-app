import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { Professional } from './professional.entity';

@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Get()
  findAll(): Promise<Professional[]> {
    return this.professionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Professional> {
    return this.professionalService.findOne(id);
  }

  @Post()
  create(@Body() professional: Professional): Promise<Professional> {
    return this.professionalService.create(professional);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() professional: Partial<Professional>): Promise<Professional> {
    return this.professionalService.update(id, professional);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.professionalService.remove(id);
  }
}
