import { PrismaService } from '../prisma/prisma.service';
export declare class AssetsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        industry: string | null;
        id: string;
        createdAt: Date;
        legalName: string;
        type: string;
        location: string;
        securityType: string;
        totalShares: number | null;
        sharePrice: number | null;
        filesCount: number;
    }[]>;
    findOne(id: string): Promise<{
        industry: string | null;
        id: string;
        createdAt: Date;
        legalName: string;
        type: string;
        location: string;
        securityType: string;
        totalShares: number | null;
        sharePrice: number | null;
        filesCount: number;
    }>;
}
