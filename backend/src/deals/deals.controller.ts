import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DealsService } from './deals.service';
import { Public } from '../auth/public.decorator';

@Controller('api/deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post()
  create(@Body() createDealDto: any) {
    return this.dealsService.create(createDealDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.dealsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDealDto: any) {
    return this.dealsService.update(id, updateDealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealsService.remove(id);
  }
}
