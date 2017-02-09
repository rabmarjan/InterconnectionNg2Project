import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './others/crisis-list.component';
import { HerroDetailComponent } from './others/herro-detail.component';
import { PageNotFoundComponent } from './others/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialComponent } from './material/material.component';
import { AuthGuard } from './login/auth.guard';


const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HerroDetailComponent },
  { path: 'login',         component: LoginComponent},
  { path: 'dashboard',     component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'landing',       component: LandingPageComponent},
  { path: 'material',      component: MaterialComponent},
  { path: '',              redirectTo: '/login', pathMatch: 'full' },
  { path: '**',            component: PageNotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes); 

// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule {}