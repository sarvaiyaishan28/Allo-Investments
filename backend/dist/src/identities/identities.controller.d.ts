import { IdentitiesService } from './identities.service';
export declare class IdentitiesController {
    private readonly identitiesService;
    constructor(identitiesService: IdentitiesService);
    findAll(): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        type: string;
        phone: string | null;
        accreditationStatus: string;
        kycStatus: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        type: string;
        phone: string | null;
        accreditationStatus: string;
        kycStatus: string;
    }>;
}
