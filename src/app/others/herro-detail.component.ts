import { Component, OnInit } from '@angular/core';
import { HelloService } from '../services/hello.service'
import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {HttpService} from '../services/http.service';
import {FormGroup, FormControl, FormBuilder, NgForm} from '@angular/forms';

@Component({
  selector: 'app-herro-detail',
  template: `
   <div>
    <a routerLink="/login" routerLinkActive="active">Login</a>
    <a routerLink="/crisis-center">Crisis Center</a>
    <a routerLink="/landing" >Landing Page</a>
    <a routerLink="/dashboard" >Dashboard</a>
    <a routerLink="/material" >Material Design</a>
    <router-outlet></router-outlet> 
     <section>
    <form [formGroup]="coolForm">
      <input formControlName="search" placeholder="Search Spotify artist">
      <input (click)="search()" type="submit" value="SearchFor Spotify Artist">
    </form>
    <table class="table table-sm table-inverse">
      <thead>
        <tr>
          <th>#</th>
          <th>OID</th>
          <th>CSB billamount</th>
          <th>OID</th>
          <th>CSB billamount</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let artist of result; let i = index;">
          <th scope="row">{{i+1}}</th>
          <td>{{artist.oid}}</td>
          <td>{{artist.billamount}}</td>
          <td>{{artist.oid}}</td>
          <td>{{artist.billamount}}</td>
        </tr>
      </tbody>
    </table>
  </section>
   </div>
  `,
  styles: []
})
export class HerroDetailComponent implements OnInit {
  title = 'marjan app works!';
  names:string[] = [];
  result:string;
  searchField: FormControl;
	coolForm: FormGroup;
  formValue = JSON.stringify({});
  onSubmit(form: NgForm){
    this.formValue = JSON.stringify(form.value);
  }
  constructor(private hello: HelloService, private fb:FormBuilder){
       this.names = hello.allList();

       this.searchField = new FormControl();
		   this.coolForm = fb.group({ search: this.searchField });
  }

  ngOnInit(){}
	search() {
		this.hello.search(this.searchField.value)
		  .subscribe(result => {
        this.result = result;
        console.log(result);
      });
       console.log(this.result);
	}
}