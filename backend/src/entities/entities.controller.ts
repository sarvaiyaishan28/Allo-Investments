import { Controller, Get, Param } from '@nestjs/common';
import { EntitiesService } from './entities.service';

@Controller('api/entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Get()
  findAll() {
    return this.entitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entitiesService.findOne(id);
  }
}
