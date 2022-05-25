import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  userLoginForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required
    ]),
    email:new FormControl('',[]),
    Password:new FormControl('',[
      Validators.required
    ])
  });

  constructor() { }

  ngOnInit() {
  }

}
