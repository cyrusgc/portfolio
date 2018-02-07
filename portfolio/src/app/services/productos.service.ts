import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { reject } from 'q';
import { resolve } from 'url';

@Injectable()
export class ProductosService {

   productos: any [] = [];
   productosFiltro: any [] = [];
  chargeProduct: boolean = true;
  constructor(public http: Http) {
    this.cargarProductos();
  }

  public cargarProductos() {

    this.chargeProduct = true;

    let promesa= new Promise(( resolve, reject => {
     this.http.get('https://dbportfolio-b01eb.firebaseio.com/productos_idx.json')
      .subscribe(data => { this.chargeProduct = false;
        this.productos = data.json();
      resolve();
      } );

    }));
    return promesa;
  }

  public cargarInfoProducto(cod: string) {
   return this.http.get(`https://dbportfolio-b01eb.firebaseio.com/productos/${cod}.json`);

  }

  public searchProducts(word: string) {
    
    if (this.productos.length===0){
      this.chargeProduct().then;
    }
    this.productos.forEach(prod=>{
    console.log();
    })

  }

}
