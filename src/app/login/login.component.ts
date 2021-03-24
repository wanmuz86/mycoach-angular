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
    this.isLoading = true;
  	this.httpService.login(this.username,
  		this.password).subscribe(resp=>{
  		this.isLoading = false;
      if (resp["success"]){
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
