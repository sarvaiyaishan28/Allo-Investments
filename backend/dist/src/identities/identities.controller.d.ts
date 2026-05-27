import { IdentitiesService } from './identities.service';
export declare class IdentitiesController {
    private readonly identitiesService;
    constructor(identitiesService: IdentitiesService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
