import { NewsService } from './news.service';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
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
