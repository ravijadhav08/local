import { Component, OnInit } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { SearchComponent} from '../search/search.component';
import { DialogService } from 'ng2-bootstrap-modal'
import { AuthGuard } from '../_guard/index';
import { AuthenticationService} from '../_service/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginLogoutText = "Login";
  loggedUser : string;
  constructor(private dialogService : DialogService,
              private authGuard: AuthGuard,
              private authenticationService : AuthenticationService ) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  
  loginOrOut(){
    let disposable = this.dialogService.addDialog(LoginComponent, {
      title:'Login to your account',
      message:'Yet to do'
    }).subscribe((username) => {
      this.loggedUser = username;
      // if(username) {
      //   //alert('Accepted');
      // }
      // else{
      //   //alert('declined');
      // }
    } )
  }
}
