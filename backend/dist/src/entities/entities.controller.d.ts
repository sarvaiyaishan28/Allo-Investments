import { EntitiesService } from './entities.service';
export declare class EntitiesController {
    private readonly entitiesService;
    constructor(entitiesService: EntitiesService);
    findAll(): Promise<{
        masterEntityId: string | null;
        ein: string | null;
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        structure: string;
        masterEntityName: string | null;
        state: string;
        address: string;
        registeredAgent: string | null;
        formationDate: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        masterEntityId: string | null;
        ein: string | null;
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        structure: string;
        masterEntityName: string | null;
        state: string;
        address: string;
        registeredAgent: string | null;
        formationDate: Date | null;
    }>;
}
