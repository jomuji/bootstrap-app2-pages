import { Component, OnInit } from '@angular/core';
import { MoviesComponent, NewestComponent } from './movies';
//import { NewestComponent } from './movies/newest.component'

@Component({
  moduleId: module.id,
  selector: 'app-content',
  templateUrl: 'content.component.html',
  directives: [MoviesComponent]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
