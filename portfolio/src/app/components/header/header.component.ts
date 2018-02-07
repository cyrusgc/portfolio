import { Component } from '@angular/core';
import {InformationService} from '../../services/information.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor (public info: InformationService,
    private router: Router) {}

 searchProduct( word: string) {

   this.router.navigate(['search', word]);
 }
}
