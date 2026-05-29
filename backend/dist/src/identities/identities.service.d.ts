import { SupabaseService } from '../supabase/supabase.service';
export declare class IdentitiesService {
    private supabase;
    constructor(supabase: SupabaseService);
    findAll(userId?: string): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    remove(id: string): Promise<any>;
}
