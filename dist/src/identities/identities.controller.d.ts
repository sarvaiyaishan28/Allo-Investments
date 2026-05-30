import { IdentitiesService } from './identities.service';
export declare class IdentitiesController {
    private readonly identitiesService;
    constructor(identitiesService: IdentitiesService);
    findAll(req: any): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(req: any, data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    remove(id: string): Promise<any>;
}
