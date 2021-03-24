import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  		this.id = this.route.snapshot.paramMap.get('id')
  }

  addReviewClicked(){
  	console.log(this.name);
  	console.log(this.comment);
  	console.log(this.rating);
  }

}
