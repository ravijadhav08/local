export class User {
    _id:string;
    username:string;
    password:string;
    firstName:string;
    lastName:string;

    constructor(id, username, password, firstname, lastname){
        this._id = id;
        this.firstName = firstname;
        this.lastName = lastname;
        this.username = username;
        this.password = password;
    }
}