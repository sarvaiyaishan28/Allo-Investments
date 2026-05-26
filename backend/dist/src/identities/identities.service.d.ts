import { PrismaService } from '../prisma/prisma.service';
export declare class IdentitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        type: string;
        phone: string | null;
        accreditationStatus: string;
        kycStatus: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        type: string;
        phone: string | null;
        accreditationStatus: string;
        kycStatus: string;
    }>;
}
