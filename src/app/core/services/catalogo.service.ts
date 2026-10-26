import { inject, Service } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Producto } from '../models/producto';

@Service()
export class CatalogoService {
    private supabase = inject(SupabaseService);

    async getProductos(): Promise<Producto[]> {
        const { data, error } = await this.supabase.client
        .from('productos')
        .select('*, variantes(*)')
        .eq('activo', true)
        .order('created_at', { ascending: false });

        if (error) throw error;
        return data ?? [];
    }
}
