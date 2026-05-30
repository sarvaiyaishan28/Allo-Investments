import { DealsService } from './deals.service';
export declare class DealsController {
    private readonly dealsService;
    constructor(dealsService: DealsService);
    create(createDealDto: any): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateDealDto: any): Promise<any>;
    remove(id: string): Promise<any>;
}
