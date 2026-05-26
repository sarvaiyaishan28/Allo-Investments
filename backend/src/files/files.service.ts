import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.fileItem.findMany({
      orderBy: { uploadedAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const record = await this.prisma.fileItem.findUnique({
      where: { id },
    });
    if (!record) throw new NotFoundException(`Record with ID ${id} not found`);
    return record;
  }
}
