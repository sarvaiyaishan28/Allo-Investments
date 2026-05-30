import { LedgerService } from './ledger.service';
export declare class LedgerController {
    private readonly ledgerService;
    constructor(ledgerService: LedgerService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    remove(id: string): Promise<any>;
}
