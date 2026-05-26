import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.newsArticle.findMany({
      orderBy: { publishedAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const record = await this.prisma.newsArticle.findUnique({
      where: { id },
    });
    if (!record) throw new NotFoundException(`Record with ID ${id} not found`);
    return record;
  }
}
