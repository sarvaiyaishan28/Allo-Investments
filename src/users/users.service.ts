import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class UsersService {
  constructor(private supabase: SupabaseService) {}

  async findOne(id: string) {
    const { data, error } = await this.supabase.client
      .from('User')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }

  async create(user: any, authHeader?: string) {
    let client = this.supabase.client;
    
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      client = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '', {
        global: { headers: { Authorization: `Bearer ${token}` } }
      });
    }

    const { data, error } = await client
      .from('User')
      .insert(user)
      .select()
      .single();

    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }
}

