import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  
categories1 = ["Pest Control","Car painter","laptop repairs","water supply","Electrician","AC Repair"];
  constructor() { }

  ngOnInit() {
  }

}
