import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        title: string;
        message: string;
        read: boolean;
        actionUrl: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        title: string;
        message: string;
        read: boolean;
        actionUrl: string | null;
    }>;
}
