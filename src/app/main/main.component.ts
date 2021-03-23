import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


coaches = [
{
	"id":1,
	"name":"Muzaffar",
	"speciality":"fitness",
	"image_url":"https://i.pinimg.com/originals/cb/f2/10/cbf2109773d01239494cac212deaac62.png"
},
{
	"id":2,
	"name":"John",
	"speciality":"fitness",
	"image_url":"https://positivecoach.org/media/835906/black-coach.png"
},
{
	"id":3,
	"name":"Doe",
	"speciality":"fitness",
	"image_url":"https://truesport.org/wp-content/uploads/youth-coach-post.jpg"
}

]
  constructor() { }

  ngOnInit() {
  }

}
