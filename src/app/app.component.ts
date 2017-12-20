import {Component, OnInit }from '@angular/core'; 
import {UserService }from './_service/index'
import {User }from './_model/index'; 
import {Http, Headers, RequestOptions, Response }from '@angular/http'; 
import {Router }from '@angular/router'; 

@Component( {
  selector:'app-root', 
  templateUrl:'./app.component.html', 
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'; 
  ngOnInit() {
  }

}
