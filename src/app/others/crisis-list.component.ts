import { Component, OnInit } from '@angular/core';
import { NgForm, } from '@angular/forms';

@Component({
  selector: 'app-crisis-list',
  template: `
  
   <a routerLink="/heroes" >Heroes</a>
   <a routerLink="/login" routerLinkActive="active">Login</a>
   <a routerLink="/landing" >Landing Page</a>
   <a routerLink="/dashboard" >Dashboard</a>
   <router-outlet></router-outlet> 
    <p> crisis-list Works! </p>
    <form #signUpForm="ngForm" (ngSubmit)="registerUser(signUpForm); signUpForm.reset()">
    <label for="firstName">First Name</label>
    <input type="text" name="firstName" id="firstName" ngModel><br>
    <label for="email">Email</label>
    <input type="text" name="email" id="email" ngModel><br>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" ngModel><br>
    <button type="submit">Sign Up</button>
    </form>
    <form #paymentForm="ngForm" (ngSubmit)="purchase(paymentForm); paymentForm.reset()">
     <fieldset ngModelGroup="contact">
     <legend>Contact</legend>
     <label>
       First Name <input type="text" name="firstname" ngModel>
     </label><br>
     <label>
       Last Name <input type="text" name="lastname" ngModel>
     </label><br>
     <label>
       Email <input type="text" name="email" ngModel>
     </label><br>
     <label>
       Phone <input type="text" name="phone" ngModel>
     </label><br>
     </fieldset>
     <button type="submit">Fieldset</button>
    </form>
    <ul>
       <li *ngFor="let val of formValue">{{val.firstname}} - {{val.lastname}}</li>
    </ul>
  `,
  styles: []
})
export class CrisisListComponent implements OnInit {
 // generateUser:string = generateUniqueUserID();
  constructor() { }
  registerUser(form: NgForm){
    console.log(form.value);
  }
  formVal= [];

  purchase(form:NgForm){
    console.log(form.value);
    //form.value = null;
      this.formVal.push(form.value);
    //form.value = '';
    //console.log(form.value.email);
  }
  get diagnostic(){
    return JSON.stringify(this.formVal);
  }
  ngOnInit() {
      //this.formVal = '';
  }

}










