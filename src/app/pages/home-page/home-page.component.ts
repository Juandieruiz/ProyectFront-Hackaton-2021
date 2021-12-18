import { Component, OnInit } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  faComment = faComment
  constructor() { }

  ngOnInit(): void {
  }

}
