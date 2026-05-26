import { PrismaService } from '../prisma/prisma.service';
export declare class FilesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        type: string;
        size: number;
        url: string;
        uploadedAt: Date;
        uploadedBy: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        type: string;
        size: number;
        url: string;
        uploadedAt: Date;
        uploadedBy: string;
    }>;
}
