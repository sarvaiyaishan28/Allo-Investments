import { EntitiesService } from './entities.service';
export declare class EntitiesController {
    private readonly entitiesService;
    constructor(entitiesService: EntitiesService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
