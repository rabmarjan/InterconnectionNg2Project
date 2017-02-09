import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../services/login.service';
 
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: LoginService){ }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
              return this.authService.isAuthenticated()
    }
}