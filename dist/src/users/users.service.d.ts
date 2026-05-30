import { SupabaseService } from '../supabase/supabase.service';
export declare class UsersService {
    private supabase;
    constructor(supabase: SupabaseService);
    findOne(id: string): Promise<any>;
    create(user: any, authHeader?: string): Promise<any>;
}
