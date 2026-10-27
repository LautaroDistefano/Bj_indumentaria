import { Component, input } from '@angular/core';
import { Producto } from '../../../core/models/producto';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  producto = input.required<Producto>()
}
