import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  menuAbierto = signal(false);

  alternarMenu() {
    this.menuAbierto.update(v => !v);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }
}
