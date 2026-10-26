import { Component, inject } from '@angular/core';
import { CatalogoService } from '../../core/services/catalogo.service';


@Component({
  imports: [],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  catalogoService = inject(CatalogoService)

  
}
