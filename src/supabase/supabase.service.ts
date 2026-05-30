import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService implements OnModuleInit {
  public client: SupabaseClient;

  onModuleInit() {
    const supabaseUrl = process.env.SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_KEY || '';

    if (!supabaseUrl || !supabaseKey) {
      console.warn('Supabase URL or Key is not defined. Ensure you have set SUPABASE_URL and SUPABASE_KEY in your .env file.');
    }

    this.client = createClient(supabaseUrl, supabaseKey);
  }
}
