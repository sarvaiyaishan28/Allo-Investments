import { Controller, Get, Param } from '@nestjs/common';
import { InvestmentsService } from './investments.service';

@Controller('api/investments')
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Get()
  findAll() {
    return this.investmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investmentsService.findOne(id);
  }
}
