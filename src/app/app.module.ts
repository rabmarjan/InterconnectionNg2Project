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
//import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { MaterialComponent } from './material/material.component';
import { AuthGuard } from './login/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HerroDetailComponent,
    PageNotFoundComponent,
    LoginComponent,
    LandingPageComponent,
    DashboardComponent,
    MaterialComponent
   
  ],
  imports: [
    //RouterModule.forRoot(appRoutes),
    //AppRoutingModule,
    routes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule ,
    MaterialModule.forRoot()
  ],
  providers: [HelloService, LoginService, CustomerService, HttpService, DashboardService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
