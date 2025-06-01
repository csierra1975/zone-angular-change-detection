import { Component, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';
import { DetalleProducto } from '../../models';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  templateUrl: './detalle-producto.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetalleProductoComponent implements DoCheck {
  @Input() detalle!: DetalleProducto;

  ngDoCheck() {
    console.log(`ngDoCheck: ProductoComponent ${this.detalle.descripcion}`);
  }
}
