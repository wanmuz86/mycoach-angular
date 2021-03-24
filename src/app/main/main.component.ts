import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


coaches 

  constructor(public httpService:HttpService) { }

  ngOnInit() {
  	this.httpService.getCoaches().subscribe(resp=>{
  		console.log(resp);
  		this.coaches = resp;
  	},err=>{

  	})
  }

}
