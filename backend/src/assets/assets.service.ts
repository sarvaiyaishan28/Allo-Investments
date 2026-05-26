import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.asset.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const record = await this.prisma.asset.findUnique({
      where: { id },
    });
    if (!record) throw new NotFoundException(`Record with ID ${id} not found`);
    return record;
  }
}
