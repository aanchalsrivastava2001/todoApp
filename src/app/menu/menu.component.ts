import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    //ng  isUserLoggedIn : boolean =false;
  constructor(public hardcodedAuthenticatioService: HardcodedAuthenticationService) {

   }

  ngOnInit(): void {

    //this.isUserLoggedIn =this.hardcodedAuthenticatioService.isUserLoggedIn();
  }


}
