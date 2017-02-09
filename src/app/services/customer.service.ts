import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { User } from '../user.interface';

@Injectable()
export class CustomerService {

  constructor(private customerService: Http) { }
  
   onAdd(user: User){
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this.customerService
         .post('http://localhost:8000/api/v1/contact/', JSON.stringify(user) ,options)
         .map(response => response.json());
  }

}
