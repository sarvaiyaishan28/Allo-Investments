import { InvestmentsService } from './investments.service';
export declare class InvestmentsController {
    private readonly investmentsService;
    constructor(investmentsService: InvestmentsService);
    findAll(req: any): Promise<any[]>;
    findByDealId(dealId: string): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(req: any, data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
}
