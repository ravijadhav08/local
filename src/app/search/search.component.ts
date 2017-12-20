import { Component, OnInit } from '@angular/core';
import { GeoService } from '../_service/index';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  locationAddress: string = "";
    // setPosition(position) {
    //    this.location = position.coords;
    //    console.log(position.coords); 
    // }
  
  constructor(private geoService : GeoService ) { }

  ngOnInit() {
    //navigator.geolocation.getCurrentPosition(this.setPosition); 
  }

  getAddress(place: Object){
    this.locationAddress = place['formatted_address'];
    console.log("Address Object", this.locationAddress);
  }

  setLocation() {
    console.log("setlocation");
    this.locationAddress = "Fetching your location..."
    this.geoService.getCurrentPosition().subscribe(
      position => {
        this.geoService.getLocationAddress(position.coords).then(
          data =>  {
            console.log(data);
            this.locationAddress = data[2].formatted_address;
          }
        )
        .catch(error => {
          console.log(error);
          this.locationAddress="";
        })
        
      }
    )
  }



}
