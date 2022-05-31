import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Listing',
  templateUrl: './Listing.component.html',
  styleUrls: ['./Listing.component.scss']
})
export class ListingComponent implements OnInit {

  

  price:any = 345;
  size:any = "32,42,68"
  constructor() { }

  ngOnInit() {
    
  }

  getListingData(){
    return 
  }

}
