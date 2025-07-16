import {
  Controller, Get, Post, Body, Param, Delete, Put
} from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { CreateProfessionalDto } from './dto/create-professional.dto';

@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Post()
  create(@Body() dto: CreateProfessionalDto) {
    return this.professionalService.create(dto);
  }

  @Get()
  findAll() {
    return this.professionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionalService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateProfessionalDto) {
    return this.professionalService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionalService.remove(+id);
  }
}
