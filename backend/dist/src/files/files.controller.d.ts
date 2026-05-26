import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    findAll(): Promise<{
        id: string;
        name: string;
        type: string;
        size: number;
        url: string;
        uploadedAt: Date;
        uploadedBy: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        type: string;
        size: number;
        url: string;
        uploadedAt: Date;
        uploadedBy: string;
    }>;
}
