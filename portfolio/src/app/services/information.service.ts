import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class InformationService {
 info: any = { };
  charge: boolean = false;
  chargeAbout: boolean = false;
  team: any [] = [];

  constructor(public http: Http) {

    this.chargingInfo();
    this.chargingAbout();
    
    }
  
  public chargingInfo(){
      this.http.get('assets/data/info.page.json')
      .subscribe(data => { this.charge = true;
        this.info = data.json(); } );
    }
    
    
  
  
  public chargingAbout(){
    this.http.get('https://dbportfolio-b01eb.firebaseio.com/equipo.json')
      .subscribe(data => { this.chargeAbout = true;
        this.team = data.json(); } );
    }
  }


