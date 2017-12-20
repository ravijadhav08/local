import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response } from '@angular/http';

import {User} from '../_model/index';

@Injectable()
export class UserService {

    constructor(private http: Http) { }
     getUsers(){
         var users :Array<User> = [
            new User(1, "kalidoss", "pass","kalidoss","murugan"),
            new User(2, "govind", "pass","kalidoss","murugan"),
            new User(3, "peter", "pass","kalidoss","murugan"),
            new User(4, "mohan", "pass","kalidoss","murugan"),
            new User(4, "ravi", "pass","jadhav","jadhav"),
        ]
     }
     create(user: User) {
        return this.http.post('/api/users', user);
    }
     getAll() {
         return this.getUsers();
     }

}