import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { FeesService } from './fees.service';

@Controller('api/fees')
export class FeesController {
  constructor(private readonly feesService: FeesService) {}

  @Get()
  findAll() {
    return this.feesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feesService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.feesService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.feesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feesService.remove(id);
  }
}
