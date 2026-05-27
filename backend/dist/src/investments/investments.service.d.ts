import { SupabaseService } from '../supabase/supabase.service';
export declare class InvestmentsService {
    private supabase;
    constructor(supabase: SupabaseService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
}
