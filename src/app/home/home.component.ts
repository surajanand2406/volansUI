import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { debounce, throttle } from "lodash"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  
  title = 'ng-carousel-demo';
   
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../../assets/images/image.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../../assets/images/image1.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../../assets/images/Nature.jpeg"}
  ];
   
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    AOS.init({
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    });
  }
  

}
