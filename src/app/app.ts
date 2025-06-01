import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Pedido } from './models';
import { PedidoComponent } from './components/pedido/pedido';
import { CommonModule } from '@angular/common';
import { contadorSignal } from './shared/shared-signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PedidoComponent, CommonModule],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

   contador =contadorSignal;

  pedidos: Pedido[] = [
    {
      id: 1,
      productos: [
        { nombre: 'Producto 1', detalles: [{ descripcion: 'Detalle 1' }] },
        { nombre: 'Producto 2', detalles: [{ descripcion: 'Detalle 2' }] }
      ]
    },
    {
      id: 2,
      productos: [
        { nombre: 'Producto 3', detalles: [{ descripcion: 'Detalle 3' }] },
        { nombre: 'Producto 4', detalles: [{ descripcion: 'Detalle 4' }] }
      ]
    }
  ];

  addPedido() {
    const nuevoPedido: Pedido = {
      id: this.pedidos.length + 1,
      productos: [{ nombre: 'Producto nuevo', detalles: [{ descripcion: 'Detalle nuevo' }] }]
    };
    this.pedidos = [...this.pedidos, nuevoPedido];
  }

  ngDoCheck() {
    console.log(`ngDoCheck: AppComponent`);
  }

}
