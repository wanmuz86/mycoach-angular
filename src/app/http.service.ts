import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  endpoint = "https://coach-api-2020.herokuapp.com/api"
  login(username: string, password: string){
  	let data = {
  		username:username,
  		password:password

  	}
    console.log(data);
    return this.httpClient
    .post(this.endpoint+'/login'
      , data);
  }


  getCoaches(){
    return this.httpClient
    .get(this.endpoint+'/coaches')
  }
  getCoachById(id:string){
    return this.httpClient
    .get(this.endpoint+'/coaches/'+id)
  }

  addReview(id:string, 
    name:string, rating:number,comment:string){

    let token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      })
    }
    let data = {
      name:name, 
      rating:rating,
      comment:comment
    }

    return this.httpClient.post(this.endpoint
      +'/coaches/'+id+'/reviews',data, httpOptions)
    

  }

}
