import { PrismaService } from '../prisma/prisma.service';
export declare class FeesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        paidDate: Date | null;
        id: string;
        createdAt: Date;
        type: string;
        status: string;
        dealName: string;
        dealId: string;
        description: string;
        amount: number;
        dueDate: Date;
    }[]>;
    findOne(id: string): Promise<{
        paidDate: Date | null;
        id: string;
        createdAt: Date;
        type: string;
        status: string;
        dealName: string;
        dealId: string;
        description: string;
        amount: number;
        dueDate: Date;
    }>;
}
