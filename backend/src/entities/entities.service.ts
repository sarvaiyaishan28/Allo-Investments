import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class EntitiesService {
  constructor(private supabase: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabase.client.from('Entity').select('*').order('createdAt', { ascending: false });
    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabase.client.from('Entity').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') throw new NotFoundException(`Record with ID ${id} not found`);
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }

  async create(data: any) {
    if (!data.id) data.id = randomUUID();
    const { data: record, error } = await this.supabase.client.from('Entity').insert(data).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async update(id: string, data: any) {
    const { data: record, error } = await this.supabase.client.from('Entity').update(data).eq('id', id).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async remove(id: string) {
    const { data: record, error } = await this.supabase.client.from('Entity').delete().eq('id', id).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }
}
