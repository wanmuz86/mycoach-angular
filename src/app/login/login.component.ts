import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService:HttpService,
    private router:Router) { }

username =""
password =""
errorMessage = "";
isLoading = false;

  ngOnInit() {
  }

  loginClicked(){
    // API call will actually return you an Observable
    // Observable is a data type in JS to manage asynchronous call
    // If it is success, you manage it under subscribe (resp)
    // If there is an error, you manage under err
    this.isLoading = true;
  	this.httpService.login(this.username,
  		this.password).subscribe(resp=>{
  		this.isLoading = false;
      if (resp["success"]){
        // dapatkan dari API, tetapi buang bahagian JWT 
        let token = resp["token"].split(' ')[1];
        localStorage.setItem('token',token);
        this.router.navigate(['main']);
      }
      else {
        this.errorMessage = resp["message"];
      }
  	}, err=>{
      this.isLoading = false;
  		console.log(err);
  	})

}
}
