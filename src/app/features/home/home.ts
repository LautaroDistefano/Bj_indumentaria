import { Component } from '@angular/core';
import { Catalogo } from '../catalogo/catalogo';
import { Hero } from '../hero/hero';

@Component({
  imports: [Catalogo, Hero],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
