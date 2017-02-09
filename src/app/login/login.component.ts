import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  cookieStor = [];
  reportList = [];
  errorMessage = "Login Failed";
  location: Location;

  constructor(builder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.loginForm = builder.group({
      username: this.username,
      password: this.password
    });
  }

  login() {
    this.loginService.login(this.loginForm.value)
      .subscribe(cookieStor => {
        this.cookieStor = cookieStor;
        sessionStorage.setItem('rolejson', JSON.stringify(cookieStor));
        this.reportList = JSON.parse(cookieStor.roleJSON).categories;
        sessionStorage.setItem('reportList', JSON.stringify(this.reportList));
        console.log(this.reportList);
      },
      err => { this.errorMessage = err.message; },
      () => { console.log('Data Loading Completed'); });
    //console.log(this.cookieStor);

    //location.href("localhost:4200");
    //this.router.navigate(["/crisis-center"])
    this.router.navigate(["/dashboard"])
  }
  
  //  login(){
  //    console.log(this.loginForm.value);
  //  }
  ngOnInit() {
  }

}
