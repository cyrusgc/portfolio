import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

   productos: any [] = [];
  chargeProduct: boolean = true;
  constructor(public http: Http) {
    this.cargarProductos();
  }
  
  public cargarProductos() {
    
    this.chargeProduct = true;
    this.http.get('https://dbportfolio-b01eb.firebaseio.com/productos_idx.json')
      .subscribe(data => { this.chargeProduct = false;
        this.productos = data.json(); } );
    
  }

}
