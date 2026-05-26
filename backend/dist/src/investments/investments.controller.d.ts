import { InvestmentsService } from './investments.service';
export declare class InvestmentsController {
    private readonly investmentsService;
    constructor(investmentsService: InvestmentsService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        kycStatus: string;
        status: string;
        managementFee: number;
        carry: number;
        dealName: string;
        investorId: string;
        investorName: string;
        investorEmail: string;
        investorType: string;
        subscriptionAmount: number;
        capitalWired: number;
        signedAt: Date | null;
        dealId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        kycStatus: string;
        status: string;
        managementFee: number;
        carry: number;
        dealName: string;
        investorId: string;
        investorName: string;
        investorEmail: string;
        investorType: string;
        subscriptionAmount: number;
        capitalWired: number;
        signedAt: Date | null;
        dealId: string;
    }>;
}
