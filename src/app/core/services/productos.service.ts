import { computed, inject, Injectable, Service, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Producto } from '../models/producto';

@Injectable({ providedIn: 'root' })
export class ProductosService {
    private supabase = inject(SupabaseService);

    private readonly _productos = signal<Producto[]>([]);
    private readonly _cargando = signal(false);
    private readonly _error = signal<string | null>(null);

    readonly productos = this._productos.asReadonly();
    readonly cargando = this._cargando.asReadonly();
    readonly error = this._error.asReadonly();

    async cargarProductos(): Promise<void> {
        this._cargando.set(true);
        this._error.set(null);

        const { data, error } = await this.supabase.client
        .from('productos')
        .select('*, variantes(*)')
        .eq('activo', true)
        .order('created_at', { ascending: false });

        if (error) {
        this._error.set('No pudimos cargar el catálogo. Probá de nuevo en un rato.');
        } else {
        this._productos.set((data ?? []) as Producto[]);
        }
        this._cargando.set(false);
    }
}