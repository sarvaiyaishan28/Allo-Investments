import { SupabaseService } from '../supabase/supabase.service';
export declare class EntitiesService {
    private supabase;
    constructor(supabase: SupabaseService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
