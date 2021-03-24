import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn(){
  	let token = localStorage.getItem('token');
  	if (token && token!=""){
  		return true;
  	}
  	return false;
  }

}
