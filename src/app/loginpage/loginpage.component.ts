import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  username:string='aanchal';
  password:string='ansr2001';
  errormessage:string= 'invalid credentials';
  invalidlogin:boolean=false;
  constructor( private router: Router,
  public hardcodedAuthenticationServices:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin(){
    //if(this.username === 'aanchal'&& this.password==='ansr2001')
    if(this.hardcodedAuthenticationServices.authenticate(this.username,this.password))
   { 
     this.router.navigate(['welcome',this.username]);
  
    this.invalidlogin=false;
  }
  else 
   this.invalidlogin=true;
   
  }
} 
