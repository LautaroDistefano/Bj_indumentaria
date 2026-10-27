import { Component } from '@angular/core';
import { Catalogo } from '../catalogo/catalogo';

@Component({
  imports: [Catalogo],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
