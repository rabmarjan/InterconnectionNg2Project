import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operater'

@Injectable()
export class HelloService {
  list: string [] = [];
  constructor(private http: Http) { }

  search(term: string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let cookieStore = JSON.parse(sessionStorage.getItem("rolejson"))
    console.log(cookieStore.roleJSON.categories)
    return this.http
    .post('http://localhost:8000/custombillcollection',
     {"user_id": cookieStore["user_id"], "api_key": cookieStore["token"]}, options)
    .map(response => response.json());
    
  }
   public  allList(){
       return this.list;
   }

}
