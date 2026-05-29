import { SupabaseService } from '../supabase/supabase.service';
export declare class InvestmentsService {
    private supabase;
    constructor(supabase: SupabaseService);
    findAll(userId?: string): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    findByDealId(dealId: string): Promise<any[]>;
}
