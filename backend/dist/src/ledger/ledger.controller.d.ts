import { LedgerService } from './ledger.service';
export declare class LedgerController {
    private readonly ledgerService;
    constructor(ledgerService: LedgerService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
