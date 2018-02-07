import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  word: string = undefined;

  constructor(private route: ActivatedRoute,
  private productService: ProductosService) {
  route.params.subscribe (parametros => {
    this.word = parametros ['word'];
    productService.searchProducts(this.word);
   });


}
}
