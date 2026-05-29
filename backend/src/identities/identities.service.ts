import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class IdentitiesService {
  constructor(private supabase: SupabaseService) {}

  async findAll(userId?: string) {
    let query = this.supabase.client.from('Identity').select('*').order('createdAt', { ascending: false });
    if (userId) {
      query = query.eq('userId', userId);
    }
    const { data, error } = await query;
    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabase.client.from('Identity').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') throw new NotFoundException(`Record with ID ${id} not found`);
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }

  async create(data: any) {
    if (!data.id) data.id = randomUUID();
    const { data: record, error } = await this.supabase.client.from('Identity').insert(data).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async update(id: string, data: any) {
    const { data: record, error } = await this.supabase.client.from('Identity').update(data).eq('id', id).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async remove(id: string) {
    const { data: record, error } = await this.supabase.client.from('Identity').delete().eq('id', id).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }
}
