// src/app/models.ts
export interface DetalleProducto {
  descripcion: string;
}

export interface Producto {
  nombre: string;
  detalles: DetalleProducto[];
}

export interface Pedido {
  id: number;
  productos: Producto[];
}
