import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { DataTransmitService } from '../util/data-transmit.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  bsValue = new Date();
   maxDate = new Date();
   minDate = new Date();
  loginData: boolean = false;
  userLoginForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required
    ]),
    email:new FormControl('',[]),
    Password:new FormControl('',[
      Validators.required
    ])
  });

  constructor(private dataService:DataTransmitService) {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
   }

  ngOnInit() {
    this.dataService.userLoginData.subscribe((data:any) => {
      this.loginData = data;
    })
  }

  login(){
  }

  signup(){
  }

}
