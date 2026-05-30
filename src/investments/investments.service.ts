import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class InvestmentsService {
  constructor(private supabase: SupabaseService) {}

  async findAll(userId?: string) {
    if (userId) {
      // Find all identities belonging to this user
      const { data: identities, error: idError } = await this.supabase.client
        .from('Identity')
        .select('id')
        .eq('userId', userId);
        
      if (idError) throw new InternalServerErrorException(idError.message);
      
      const identityIds = identities.map((i: any) => i.id);
      
      if (identityIds.length === 0) {
        // Fallback: maybe they stored userId directly in investorId during testing?
        identityIds.push(userId);
      }
      
      const { data, error } = await this.supabase.client
        .from('Investment')
        .select('*')
        .in('investorId', identityIds)
        .order('createdAt', { ascending: false });
        
      if (error) throw new InternalServerErrorException(error.message);
      return data;
    }

    const { data, error } = await this.supabase.client
      .from('Investment')
      .select('*')
      .order('createdAt', { ascending: false });
      
    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabase.client.from('Investment').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') throw new NotFoundException(`Record with ID ${id} not found`);
      throw new InternalServerErrorException(error.message);
    }
    return data;
  }
  async create(data: any) {
    const { data: record, error } = await this.supabase.client.from('Investment').insert(data).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async update(id: string, data: any) {
    const { data: record, error } = await this.supabase.client.from('Investment').update(data).eq('id', id).select().single();
    if (error) throw new InternalServerErrorException(error.message);
    return record;
  }

  async findByDealId(dealId: string) {
    const { data, error } = await this.supabase.client.from('Investment').select('*').eq('dealId', dealId).order('createdAt', { ascending: false });
    if (error) throw new InternalServerErrorException(error.message);
    return data;
  }
}
