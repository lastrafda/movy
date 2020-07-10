import { Component, OnInit } from '@angular/core';
import {ThemoviedbService} from '../themoviedb.service';
import {IPopularMovie} from '../shared/models/popular.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: IPopularMovie[];
  public filteredMovies: IPopularMovie[];
  public searchTerm: string;
  constructor(private movieDBService: ThemoviedbService) { }

  ngOnInit(): void {
    this.movieDBService
      .getPopularMovies()
      .subscribe(res => {
        this.movies = res.results;
        this.filteredMovies = res.results;
      });
  }

  onSubmit() {
    this.filteredMovies = this.movies
      .filter(x => {
        console.log(x.title);
        return x.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
  }
}
