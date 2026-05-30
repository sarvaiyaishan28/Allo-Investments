import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './public.decorator';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseAuthGuard {
  private supabase: any;
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (!this.supabase) {
      this.supabase = createClient(
        process.env.SUPABASE_URL as string,
        process.env.SUPABASE_KEY as string
      );
    }
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) throw new UnauthorizedException('No authorization header');

    const token = authHeader.split(' ')[1];
    if (!token) throw new UnauthorizedException('No token provided');

    const { data, error } = await this.supabase.auth.getUser(token);
    if (error || !data.user) {
      throw new UnauthorizedException('Invalid token');
    }

    request.user = data.user;
    return true;
  }
}
