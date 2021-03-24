import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


coaches 

  constructor(public httpService:HttpService,
public router:Router
    ) { }

  ngOnInit() {
  	this.httpService.getCoaches().subscribe(resp=>{
  		console.log(resp);
  		this.coaches = resp;
  	},err=>{

  	})
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
