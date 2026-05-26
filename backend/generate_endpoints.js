const fs = require('fs');
const path = require('path');

const modules = [
  { name: 'investments', model: 'investment' },
  { name: 'assets', model: 'asset' },
  { name: 'entities', model: 'entity' },
  { name: 'identities', model: 'identity' },
  { name: 'news', model: 'newsArticle' },
  { name: 'files', model: 'fileItem' },
  { name: 'notifications', model: 'notification' },
  { name: 'ledger', model: 'ledgerEntry' },
  { name: 'fees', model: 'fee' },
];

for (const mod of modules) {
  const Name = mod.name.charAt(0).toUpperCase() + mod.name.slice(1);
  const controllerPath = path.join(__dirname, 'src', mod.name, `${mod.name}.controller.ts`);
  const servicePath = path.join(__dirname, 'src', mod.name, `${mod.name}.service.ts`);

  const controllerContent = `import { Controller, Get, Param } from '@nestjs/common';
import { ${Name}Service } from './${mod.name}.service';

@Controller('api/${mod.name}')
export class ${Name}Controller {
  constructor(private readonly ${mod.name}Service: ${Name}Service) {}

  @Get()
  findAll() {
    return this.${mod.name}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${mod.name}Service.findOne(id);
  }
}
`;

  const serviceContent = `import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ${Name}Service {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.${mod.model}.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const record = await this.prisma.${mod.model}.findUnique({
      where: { id },
    });
    if (!record) throw new NotFoundException(\`Record with ID \${id} not found\`);
    return record;
  }
}
`;

  fs.writeFileSync(controllerPath, controllerContent);
  fs.writeFileSync(servicePath, serviceContent);
}

console.log('Endpoints generated successfully!');
