import { Component, DoCheck , Input, ChangeDetectionStrategy, inject, NgZone, effect } from '@angular/core';
import { Producto, DetalleProducto } from '../../models';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto';
import { CommonModule } from '@angular/common';
import { contadorSignal } from '../../shared/shared-signals';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [DetalleProductoComponent, CommonModule],
  templateUrl: './producto.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoComponent implements DoCheck{
  @Input() producto!: Producto;

  private ngZone = inject(NgZone);

  // constructor() {
  //   effect(() => {
  //     const valor = contadorSignal();
  //     console.log('Signal cambió: ', valor);
  //     this.cambiarContadorSinEvento();
  //     // Esta reacción es zoneless
  //   });
  // }

  // cambiarContadorSinEvento() {
  //   // Esta actualización se hace sin evento del DOM
  //   // Si se llama desde un efecto o alguna reactividad interna,
  //   // NO se dispara Zone.js → NO hay ngDoCheck
  //   contadorSignal.update(v => v + 1);
  // }

  addDetalle() {

    const nuevoDetalle: DetalleProducto = { descripcion: 'Detalle añadido' };
    this.producto.detalles = [...this.producto.detalles, nuevoDetalle];
  }

  ngDoCheck() {
    console.log(`ngDoCheck: ProductoComponent ${this.producto.nombre}`);
  }

  cambiarNombre() {
    this.producto.nombre = this.producto.nombre + ' (modificado)';
  }

  incrementar() {
    //this.contador.update((n: number) => n + 1);

    this.ngZone.runOutsideAngular(() => {
      // Esto no dispara ApplicationRef.tick()
      contadorSignal.set(contadorSignal() + 1);
      console.log('Signal actualizado fuera de Zone.js');
    });
  }
}
