import { Component, computed, input } from '@angular/core';
import { Producto } from '../../../core/models/producto';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  producto = input.required<Producto>()

  precioFormateado = computed(() =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(this.producto().precio)
  );
}
