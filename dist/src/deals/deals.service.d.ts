import { SupabaseService } from '../supabase/supabase.service';
export declare class DealsService {
    private supabase;
    constructor(supabase: SupabaseService);
    create(data: any): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, data: any): Promise<any>;
    remove(id: string): Promise<any>;
}
