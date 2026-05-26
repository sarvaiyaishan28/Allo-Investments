import { PrismaService } from '../prisma/prisma.service';
export declare class NewsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        featured: boolean;
        id: string;
        title: string;
        summary: string;
        content: string;
        source: string;
        sourceIcon: string | null;
        imageUrl: string | null;
        publishedAt: Date;
        category: string;
        relatedCompanies: string[];
    }[]>;
    findOne(id: string): Promise<{
        featured: boolean;
        id: string;
        title: string;
        summary: string;
        content: string;
        source: string;
        sourceIcon: string | null;
        imageUrl: string | null;
        publishedAt: Date;
        category: string;
        relatedCompanies: string[];
    }>;
}
