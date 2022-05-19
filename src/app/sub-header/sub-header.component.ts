import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonUtilService } from '../util/common-util.service';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

interface Categories {
  name: string;
  children?: Categories[];
}
const TREE_DATA: Categories[] = [
  {
    name: 'Categories',
    children: [{name: 'Auctions'}, {name: 'Custome Made'}, {name: 'Exclusive Services'},{name: 'Sponsorship'},{name: 'Blog'}],
  }
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SubHeaderComponent implements OnInit {
  private _transformer = (node: Categories, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  slides = [
    { img: '../../assets/images/image.jpg' },
    { img: '../../assets/images/image1.jpg' },
    { img: '../../assets/images/image.jpg' },
    { img: '../../assets/images/image1.jpg' },
    { img: '../../assets/images/image.jpg' },
  ];
  slideConfig = { slidesToShow: 3, slidesToScroll: 4, arrows:false, autoplay:true, autoplaySpeed:1000 };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../../assets/images/image.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../../assets/images/image1.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/images/Nature.jpeg"},
    {title: 'Second Slide', short: 'fourth Slide Short', src: "../../assets/images/image1.jpg"},
    {title: 'Third Slide', short: 'fifth Slide Short', src: "../../assets/images/Nature.jpeg"}
  ];

  imglist:any = [];
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor(private utilService:CommonUtilService, config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.animation = true;
    this.dataSource.data = TREE_DATA;
  }


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
hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
