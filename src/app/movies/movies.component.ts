import { Component, OnInit } from '@angular/core';
import {ThemoviedbService} from "../themoviedb.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies;
  constructor(private movieDBService: ThemoviedbService) { }

  ngOnInit(): void {
    this.movieDBService
      .getPopularMovies()
      .subscribe(res => {
        console.log(res);
        this.movies = res.results;
      });
  }

}
