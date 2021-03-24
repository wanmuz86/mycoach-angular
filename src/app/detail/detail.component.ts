import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

id
coach

  constructor(
private route:ActivatedRoute,
private httpService:HttpService
  	) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id')

  this.httpService.getCoachById(this.id)
  .subscribe(resp=>{
console.log(resp);
this.coach= resp;
  },
  err=>{

  })
  }

}
