import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { PatientService } from './patient.service'
import { Patient } from './patient.entity'

@Controller('patients')
export class PatientController {
  constructor(private service: PatientService) {}

  @Get()
  findAll() {
    return this.service.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id)
  }

  @Post()
  create(@Body() data: Partial<Patient>) {
    return this.service.create(data)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Patient>) {
    return this.service.update(id, data)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id)
  }
}
