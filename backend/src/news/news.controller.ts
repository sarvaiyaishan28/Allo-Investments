import { Controller, Get, Param } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('api/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }
}
