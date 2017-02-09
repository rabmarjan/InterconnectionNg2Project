import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloService } from './services/hello.service';
import { HttpService } from './services/http.service';
import { LoginService } from './services/login.service';
import { CustomerService } from './services/customer.service';
import { DashboardService } from './services/dashboard.service';

//import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './others/crisis-list.component';
import { HerroDetailComponent } from './others/herro-detail.component';
import { PageNotFoundComponent } from './others/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// const appRoutes: Routes = [
//   {path: 'crisis-center', component: CrisisListComponent},
//   {path:'heroes', component: HerroDetailComponent},
//    { path: '**', component: PageNotFoundComponent }

// ];


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HerroDetailComponent,
    PageNotFoundComponent,
    LoginComponent,
    LandingPageComponent,
    DashboardComponent
   
  ],
  imports: [
    //RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule 
  ],
  providers: [HelloService, LoginService, CustomerService, HttpService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
