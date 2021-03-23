import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string){
  	let data = {
  		username:username,
  		password:password

  	}

console.log(data);
  	return this.httpClient
  	.post('https://coach-api-2020.herokuapp.com/api/login'
  		, data);
  }
}
