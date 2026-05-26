import { Controller, Get, Param } from '@nestjs/common';
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
}
