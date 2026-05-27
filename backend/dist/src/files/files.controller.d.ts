import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
