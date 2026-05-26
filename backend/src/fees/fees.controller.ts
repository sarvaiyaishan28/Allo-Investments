import { Controller, Get, Param } from '@nestjs/common';
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
}
