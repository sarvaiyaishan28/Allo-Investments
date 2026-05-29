import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { LedgerService } from './ledger.service';

@Controller('api/ledger')
export class LedgerController {
  constructor(private readonly ledgerService: LedgerService) {}

  @Get()
  findAll() {
    return this.ledgerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ledgerService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.ledgerService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.ledgerService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ledgerService.remove(id);
  }
}
