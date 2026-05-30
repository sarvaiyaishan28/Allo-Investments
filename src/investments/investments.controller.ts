import { Controller, Get, Post, Patch, Param, Body, UseGuards, Request } from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';

@Controller('api/investments')
@UseGuards(SupabaseAuthGuard)
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Get()
  findAll(@Request() req: any) {
    return this.investmentsService.findAll(req.user.id);
  }

  @Get('deal/:dealId')
  findByDealId(@Param('dealId') dealId: string) {
    return this.investmentsService.findByDealId(dealId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investmentsService.findOne(id);
  }

  @Post()
  create(@Request() req: any, @Body() data: any) {
    return this.investmentsService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.investmentsService.update(id, data);
  }
}
