import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards, Request } from '@nestjs/common';
import { IdentitiesService } from './identities.service';
import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';

@Controller('api/identities')
@UseGuards(SupabaseAuthGuard)
export class IdentitiesController {
  constructor(private readonly identitiesService: IdentitiesService) {}

  @Get()
  findAll(@Request() req: any) {
    return this.identitiesService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.identitiesService.findOne(id);
  }

  @Post()
  create(@Request() req: any, @Body() data: any) {
    return this.identitiesService.create({ ...data, userId: req.user.id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.identitiesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.identitiesService.remove(id);
  }
}
