import { animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  config:any = {
    animated:true,
    backdrop:'static',
    class:'modal-md'
  }
  // @ViewChild('regUser', {static:false}) public regUser: ElementRef<any>;
  constructor(private modalService: BsModalService, private modelRef:BsModalRef, private router:Router) {
  }

  ngOnInit(): void {
  }

  register(){
    // this.modelRef = this.modalService.show(this.regUser,this.config)
  }

  login(){
    this.router.navigate(['signUp']);
  }

}
