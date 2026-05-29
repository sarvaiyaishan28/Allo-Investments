import { EntitiesService } from './entities.service';
export declare class EntitiesController {
    private readonly entitiesService;
    constructor(entitiesService: EntitiesService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    remove(id: string): Promise<any>;
}
