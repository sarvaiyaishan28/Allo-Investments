import { PrismaService } from '../prisma/prisma.service';
export declare class LedgerService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        status: string;
        dealName: string;
        dealId: string;
        description: string;
        amount: number;
        date: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        status: string;
        dealName: string;
        dealId: string;
        description: string;
        amount: number;
        date: Date;
    }>;
}
