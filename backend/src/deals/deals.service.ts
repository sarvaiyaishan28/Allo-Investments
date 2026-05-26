import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DealsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.deal.create({ data });
  }

  async findAll() {
    return this.prisma.deal.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const deal = await this.prisma.deal.findUnique({
      where: { id },
      include: {
        investments: true,
        ledgerEntries: true,
        fees: true,
      }
    });
    if (!deal) throw new NotFoundException(`Deal with ID ${id} not found`);
    return deal;
  }

  async update(id: string, data: any) {
    return this.prisma.deal.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.deal.delete({
      where: { id },
    });
  }
}
