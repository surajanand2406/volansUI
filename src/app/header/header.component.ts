import { animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  regUser :any;
  config:any = {
    animated:true,
    backdrop:'static',
    class:'modal-md'
  }
  // @ViewChild('regUser', {static:true, read: ElementRef}) public regUser: ElementRef;
  constructor(private modalService: BsModalService, private modelRef:BsModalRef) {
  }

  ngOnInit(): void {
  }

  register(){
    this.modelRef = this.modalService.show(this.regUser,this.config)
  }

}
