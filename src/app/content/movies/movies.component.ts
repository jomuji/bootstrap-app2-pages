import { Component, OnInit } from '@angular/core';
import { NewestComponent } from './newest.component';
import { PopularComponent } from './popular.component';

@Component({
  moduleId: module.id,
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  directives: [NewestComponent, PopularComponent]
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
