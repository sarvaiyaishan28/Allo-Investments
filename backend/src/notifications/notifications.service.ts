import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class NotificationsService {
  constructor(private supabase: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabase.client.from('Notification').select('*').order('createdAt', { ascending: false });
    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabase.client.from('Notification').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') throw new NotFoundException(`Record with ID ${id} not found`);
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }

  async create(data: any) {
    const { data: record, error } = await this.supabase.client.from('Notification').insert(data).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async update(id: string, data: any) {
    const { data: record, error } = await this.supabase.client.from('Notification').update(data).eq('id', id).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async remove(id: string) {
    const { data: record, error } = await this.supabase.client.from('Notification').delete().eq('id', id).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }
}
