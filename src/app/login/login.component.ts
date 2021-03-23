import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService:HttpService) { }

username =""
password =""
  ngOnInit() {
  }

  loginClicked(){
  	this.httpService.login(this.username,
  		this.password).subscribe(resp=>{
  		console.log(resp);
  	}, err=>{
  		console.log(err);
  	})

}
}
