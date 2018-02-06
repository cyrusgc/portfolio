import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  item: any = undefined;

  constructor(private route: ActivatedRoute,
  private productService: ProductosService) {
  route.params.subscribe (parametros => {
    productService.cargarInfoProducto(parametros['id'])
      .subscribe(res => {
        this.item = res.json();
      });
  });

  }

}
