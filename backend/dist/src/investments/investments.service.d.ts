import { PrismaService } from '../prisma/prisma.service';
export declare class InvestmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        kycStatus: string;
        status: string;
        managementFee: number;
        carry: number;
        dealName: string;
        investorId: string;
        investorName: string;
        investorEmail: string;
        investorType: string;
        subscriptionAmount: number;
        capitalWired: number;
        signedAt: Date | null;
        dealId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        kycStatus: string;
        status: string;
        managementFee: number;
        carry: number;
        dealName: string;
        investorId: string;
        investorName: string;
        investorEmail: string;
        investorType: string;
        subscriptionAmount: number;
        capitalWired: number;
        signedAt: Date | null;
        dealId: string;
    }>;
}
