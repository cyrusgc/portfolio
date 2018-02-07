import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

  producto: any = undefined;
  cod: string = undefined;

  constructor(private route: ActivatedRoute,
  private productService: ProductosService) {
  route.params.subscribe (parametros => {
    // console.log(parametros);
    // console.log(parametros['id']);
    productService.cargarInfoProducto(parametros['id'])
      .subscribe(res => {
        this.cod = parametros['id'];
this.producto = res.json();
      });
  });

  }

}
