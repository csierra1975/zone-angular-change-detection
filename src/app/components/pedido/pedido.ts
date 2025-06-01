import { Component, DoCheck , Input, ChangeDetectionStrategy} from '@angular/core';
import { Pedido, Producto } from '../../models';
import { ProductoComponent } from '../producto/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [ProductoComponent, CommonModule],
  templateUrl: './pedido.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PedidoComponent implements DoCheck{
[x: string]: any;
  @Input() pedido!: Pedido;

  addProducto() {
    const nuevoProducto: Producto = {
      nombre: 'Producto añadido',
      detalles: [{ descripcion: 'Detalle por defecto' }]
    };
    this.pedido.productos = [...this.pedido.productos, nuevoProducto];
  }

  ngDoCheck() {
    console.log(`ngDoCheck: PedidoComponent ${this.pedido.id}`);
  }
}
