import { FeesService } from './fees.service';
export declare class FeesController {
    private readonly feesService;
    constructor(feesService: FeesService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
