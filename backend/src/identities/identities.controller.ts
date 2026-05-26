import { Controller, Get, Param } from '@nestjs/common';
import { IdentitiesService } from './identities.service';

@Controller('api/identities')
export class IdentitiesController {
  constructor(private readonly identitiesService: IdentitiesService) {}

  @Get()
  findAll() {
    return this.identitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.identitiesService.findOne(id);
  }
}
