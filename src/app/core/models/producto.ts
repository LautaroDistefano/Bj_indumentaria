import { ProductoVariante } from "./productoVariante";

export interface Producto {
    id: string;
    nombre: string;
    descripcion: string | null;
    precio: number;
    categoria: string | null;
    imagen_url: string | null;
    variantes: ProductoVariante[];
}