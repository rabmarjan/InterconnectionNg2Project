import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
  data = JSON.stringify({});
  constructor(private http: Http) {
   }
    login(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .post('http://localhost:8000/api/login/', data, options)
    .map(response => response.json())
    .catch((e) => {
        return Observable.throw(
          new Error(`${ e.status } ${ e.statusText }`)
        );
      });
  }

}
