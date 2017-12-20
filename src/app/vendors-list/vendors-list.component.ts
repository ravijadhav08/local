import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})
export class VendorsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vendorList: any[] = [ {
    "Name": "Vendor 1",
    "Address" : "Vendor One Address"
 },
 {
  "Name": "Vendor 2",
  "Address" : "Vendor two Address"
},
{
  "Name": "Vendor 3",
  "Address" : "Vendor three Address"
}];
}
