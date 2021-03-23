import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

id
  constructor(
private route:ActivatedRoute
  	) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id')

  	// this.route.queryParams.subscribe(params=>{
  	// 	console.log(params['name']);

  	// })
  }

}
