import { AssetsService } from './assets.service';
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
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
