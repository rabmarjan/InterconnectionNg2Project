import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url
  reportJson: any;
  constructor(private router: Router) { }

   getData(){
      let reportJson = JSON.parse(sessionStorage.getItem("reportList"));
      return reportJson
        //console.log(reportJson);
   }
 
   performClickAction(url){
     console.log(url)
     if(url === "Agent_Outlet_Wise_Mis_Report"){
          this.router.navigate(["/landing"])
     }
     if(url === "Outlet_Wise_DA_Position_Report"){
       this.router.navigate(["/crisis-center"])
     }
     if(url === "Product_Wise_DA_Position_Report"){
       this.router.navigate(["/material"])
     }
      
   }
  ngOnInit() {
    this.reportJson = this.getData();
    console.log(this.reportJson);
  }

}
