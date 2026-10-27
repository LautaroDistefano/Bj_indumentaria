import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductosService } from '../../core/services/productos.service';
import { Producto } from '../../core/models/producto';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-catalogo',
  imports: [ProductCard, RouterLink],
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo implements OnInit {
  protected readonly productoService = inject(ProductosService);

  ngOnInit() {
    this.productoService.cargarProductos();
  }
}