import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EntitiesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.entity.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const record = await this.prisma.entity.findUnique({
      where: { id },
    });
    if (!record) throw new NotFoundException(`Record with ID ${id} not found`);
    return record;
  }
}
