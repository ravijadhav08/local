import { Component, OnInit } from '@angular/core';
import {DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';

import {AlertService, AuthenticationService, UserService } from '../_service/index';
import { User} from '../_model/index';
import {AlertComponent } from '../alert/alert.component';

export interface LoginModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends DialogComponent<LoginModel, string> implements LoginModel {
  title: string;
  public errorMsg = '';
  message: string;
  user: User;

  model:any ={};
  loading = false;
  returnUrl: string;
  

  constructor(dialogService : DialogService,
              private route : ActivatedRoute,
              private router : Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService)
              //private userService: UserService)
              { 
                  super(dialogService);
                  
              }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    
        if(users.length ==0)
        {
          let users : any[] = [];
            let _user : User = new User("1","admin","admin","ramu","local");
            users.push(_user);
            //this.userService.create(_user);
            localStorage.setItem('users',JSON.stringify(users));
        }


    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                this.result = data.username;
                this.close();
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    
  }


  confirm() {
    //this.result = true;
    this.close();
  }
  

}
