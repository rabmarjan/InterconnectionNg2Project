import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { User } from '../user.interface';
import {HttpService} from '../services/http.service';
import {CustomerService} from '../services/customer.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public user: User;

userList = [];

constructor(private userListService: HttpService, private customerListService: CustomerService){}
 
 getAllUser(){
     this.userListService.getAll()
     .subscribe(userList => {
         this.userList = userList;
         console.log("From get method" + this.userList);
     });
     console.log(this.userList);
 }

 onAddList(user){
     this.customerListService.onAdd(user)
     .subscribe(userList =>{
         userList = this.userList.push(user)
         console.log("From post method " + userList);
     });
     console.log("From post method localvar " + this.userList);
 }

  public genders = [
      { value: 'F', display: 'Female' },
      { value: 'M', display: 'Male' }
  ];
  public roles = [
      { value: 'admin', display: 'Administrator' },
      { value: 'guest', display: 'Guest' },
      { value: 'custom', display: 'Custom' }
  ];
  public topics = [
      { value: 'game', display: 'Gaming' },
      { value: 'tech', display: 'Technology' },
      { value: 'life', display: 'Lifestyle' },
  ];
  public toggles = [
      { value: 'toggled', display: 'Toggled' },
      { value: 'untoggled', display: 'UnToggled' },
  ];

//   onAddList(user){
//       this.userList.push(user);
//       console.log(user);
//    }

    ngOnInit() {
      this.user = {
          fname: '',
          lname: '',
          email: '',
          country: '',
          gender: this.genders[0].value, // default to Female
          role: null,
          isActive: false,
          toggle: this.toggles[1].value, // default to untoggled
          topics: [this.topics[1].value] // default to Technology
        }
    }
    public save(isValid: boolean, f: User) {
        console.log(f);
    }
     
}






