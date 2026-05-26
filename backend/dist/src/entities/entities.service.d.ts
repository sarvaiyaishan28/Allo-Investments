import { PrismaService } from '../prisma/prisma.service';
export declare class EntitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        masterEntityId: string | null;
        ein: string | null;
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        structure: string;
        masterEntityName: string | null;
        state: string;
        address: string;
        registeredAgent: string | null;
        formationDate: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        masterEntityId: string | null;
        ein: string | null;
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        structure: string;
        masterEntityName: string | null;
        state: string;
        address: string;
        registeredAgent: string | null;
        formationDate: Date | null;
    }>;
}
