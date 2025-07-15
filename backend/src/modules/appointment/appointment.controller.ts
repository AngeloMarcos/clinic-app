import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { AppointmentService } from './appointment.service'
import { Appointment } from './appointment.entity'

@Controller('appointments')
export class AppointmentController {
  constructor(private service: AppointmentService) {}

  @Get()
  findAll() {
    return this.service.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id)
  }

  @Post()
  create(@Body() data: Partial<Appointment>) {
    return this.service.create(data)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Appointment>) {
    return this.service.update(id, data)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id)
  }
}
