import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonUtilService } from '../util/common-util.service';
// import { NzCarouselComponent } from 'ng-zorro-antd';


@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  imglist:any = [];

  // @ViewChild('MyNewCarousel', { static: false }) myCarousel: NzCarouselComponent;
  constructor(private utilService:CommonUtilService) { }

  ngOnInit(): void {
    this.getCarouselImg();
  }

getCarouselImg(){
  this.utilService.getImg().subscribe(resp => {
    this.imglist=resp;
  })
}

changeCarouselImage(){
  // const index = this.myCarousel.activeIndex;
  // const imageList = this.imglist[index];
  // imageList.forEach((element, indx) => {
    
  // });
}

}
