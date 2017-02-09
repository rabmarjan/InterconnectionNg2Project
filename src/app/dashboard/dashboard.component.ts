import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cookieStore
  constructor() { 
     let cookieStor = JSON.parse(sessionStorage.getItem("rolejson"))
     console.log(this.cookieStore);
  }

  ngOnInit() {
    console.log(this.cookieStore);
  }

}
