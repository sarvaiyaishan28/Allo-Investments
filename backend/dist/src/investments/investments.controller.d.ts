import { InvestmentsService } from './investments.service';
export declare class InvestmentsController {
    private readonly investmentsService;
    constructor(investmentsService: InvestmentsService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
