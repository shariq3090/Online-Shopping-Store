//import { animation } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
//import { MatSidenav } from '@angular/material/sidenav';
//import { slideInAnimation } from './animations';
import {BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' 
  //animation: [slideInAnimation]
]
})
export class AppComponent {
  //@ViewChild(MatSidenav)
  //sidenav! : MatSidenav;
  title = 'Online Shopping Store';

  constructor(private observer : BreakpointObserver){}

  /*ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }*/
}
