import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { User } from '../user.interface';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  
   search(term: string){
    return this.http
    .get('http://localhost:8000/billcollection')
     .map(response => response.json());
    
  }

getAll(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
   // headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
    return this.http
        .get('http://localhost:8000/api/v1/contact/' ,options)
        .map(response => response.json());
  }

}
