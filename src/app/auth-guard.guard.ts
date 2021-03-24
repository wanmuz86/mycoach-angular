import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
 

 constructor(private authService:AuthService,
 	private router:Router){

 }

// method that need to be override to check
// user can proceed or not 
// canActivate
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
   if (this.authService.isUserLoggedIn()){
     
    	return true;
    }
    this.router.navigate(['/login']);
     
    return false;
  }
}
