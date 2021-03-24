import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService } from '../http.service';
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

name = ""
comment = ""
rating
id
  constructor(private route:ActivatedRoute,
  	private httpService:HttpService) { }

  ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('id')
  }

  addReviewClicked(){
  	console.log(this.name);
  	console.log(this.comment);
  	console.log(this.rating);

  	this.httpService.addReview(this.id, this.name,
  	 this.rating,
  	 this.comment)
  	.subscribe(resp=>{
  		console.log(resp);

  	},err=>{
console.log(err);
  	})
  }

}
