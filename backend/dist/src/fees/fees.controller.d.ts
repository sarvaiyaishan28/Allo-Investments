import { FeesService } from './fees.service';
export declare class FeesController {
    private readonly feesService;
    constructor(feesService: FeesService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    remove(id: string): Promise<any>;
}
