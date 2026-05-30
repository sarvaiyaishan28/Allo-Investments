import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
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

  @Post()
  create(@Body() data: any) {
    return this.entitiesService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.entitiesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entitiesService.remove(id);
  }
}
