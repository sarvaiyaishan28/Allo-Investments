import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class SupabaseAuthGuard {
    private reflector;
    private supabase;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
