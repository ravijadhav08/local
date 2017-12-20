import {Injectable }from '@angular/core'; 
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable }from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/toPromise'


@Injectable()
export class GeoService {
    location: Coordinates ;
    latitude:number;
    longitude:number;
    result:string;

    constructor(private http: HttpClient) {

    }


    getCurrentPosition() :Observable<Position> {
        return new Observable(observer => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    observer.next(position);
                    observer.complete();
                },
                (error) => {
                    observer.error(error);
                    observer.complete();
                }
            )
        })
    }

    private getLatitude() {
        return this.location.latitude;
    }

    private getLongitude() {
        return this.location.longitude
    }

    getLocationAddress(coords: Coordinates):Promise<any> {
        //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
        
        let url:string = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + coords.latitude + ',' + coords.longitude + '&key=AIzaSyBhRoiBz3m04Py9Go62RPUdUViPxPpcZVE';
        return this.http.get(url)
        .toPromise()
        .then(this.getCurrentAddress)
        .catch((error) => console.log(error) );
    }

    private getCurrentAddress(res : any) {
        let body = res.results;
        console.log(body);
        return body;
        // this.getLocationAddress()
        // .then((response)=> this.result = response.results[0] )
        // .catch((error)=> console.log(error));
    }

}