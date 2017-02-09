import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './others/crisis-list.component';
import { HerroDetailComponent } from './others/herro-detail.component';
import { PageNotFoundComponent } from './others/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HerroDetailComponent },
  { path: 'login',         component: LoginComponent},
  { path: 'dashboard',     component: DashboardComponent},
  { path: 'landing',       component: LandingPageComponent},
  { path: '',              redirectTo: '/login', pathMatch: 'full' },
  { path: '**',            component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}