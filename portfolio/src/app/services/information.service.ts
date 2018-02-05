import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class InformationService {
 info: any = { };
  charge: boolean = false;

  constructor(public http: Http) {

    this.http.get("assets/data/info.page.json")
      .subscribe(data => {console.log(data.json()); 
        this.charge = true;
        this.info = data.json(); } )
      ;
    }

}
