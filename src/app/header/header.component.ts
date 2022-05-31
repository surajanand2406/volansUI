import { animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { DataTransmitService } from '../util/data-transmit.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  auth:any;
  config:any = {
    animated:true,
    backdrop:'static',
    class:'modal-md'
  }
  // @ViewChild('regUser', {static:false}) public regUser: ElementRef<any>;
  constructor(private modalService: BsModalService, private modelRef:BsModalRef, private router:Router, private dataService:DataTransmitService) {
  }

  ngOnInit(): void {
  }

  register(){
    this.dataService.sendData(false);
    this.router.navigate(['signUp']);
    // this.modelRef = this.modalService.show(this.regUser,this.config)
  }

  login(){
    this.dataService.sendData(true);
    this.router.navigate(['signUp']);
  }

}
