import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HomeService} from './home.service';
import {ITrend} from '../shared/models/trend.model';
import {ActivatedRoute} from '@angular/router';
import {IPopularMovie} from '../shared/models/popular.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trends: ITrend[];
  popularMovies: IPopularMovie[];
  constructor(private homeService: HomeService,
              private route: ActivatedRoute) {
    this.trends = this.route.snapshot.data.trends;
  }

  ngOnInit() {
    this.homeService.getPopularMovies().subscribe(data => {
      this.popularMovies = data.results;
    });
  }
}
