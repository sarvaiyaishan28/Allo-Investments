import { LedgerService } from './ledger.service';
export declare class LedgerController {
    private readonly ledgerService;
    constructor(ledgerService: LedgerService);
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
