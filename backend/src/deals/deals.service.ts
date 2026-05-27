import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class DealsService {
  constructor(private supabase: SupabaseService) {}

  async create(data: any) {
    const { data: record, error } = await this.supabase.client.from('Deal').insert(data).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async findAll() {
    const { data, error } = await this.supabase.client.from('Deal').select('*').order('createdAt', { ascending: false });
    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabase.client
      .from('Deal')
      .select('*, investments:Investment(*), ledgerEntries:LedgerEntry(*), fees:Fee(*)')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') throw new NotFoundException(`Deal with ID ${id} not found`);
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }

  async update(id: string, data: any) {
    const { data: record, error } = await this.supabase.client.from('Deal').update(data).eq('id', id).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async remove(id: string) {
    const { data: record, error } = await this.supabase.client.from('Deal').delete().eq('id', id).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }
}
