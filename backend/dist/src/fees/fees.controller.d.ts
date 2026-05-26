import { FeesService } from './fees.service';
export declare class FeesController {
    private readonly feesService;
    constructor(feesService: FeesService);
    findAll(): Promise<{
        paidDate: Date | null;
        id: string;
        createdAt: Date;
        type: string;
        status: string;
        dealName: string;
        dealId: string;
        description: string;
        amount: number;
        dueDate: Date;
    }[]>;
    findOne(id: string): Promise<{
        paidDate: Date | null;
        id: string;
        createdAt: Date;
        type: string;
        status: string;
        dealName: string;
        dealId: string;
        description: string;
        amount: number;
        dueDate: Date;
    }>;
}
