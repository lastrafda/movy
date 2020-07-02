import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HomeService} from './home.service';
import {ITrend, ITrendResponse} from '../shared/models/trend.model';
import {BackdropSizes} from '../shared/enums/backdrop-sizes.enum';
import {ActivatedRoute} from '@angular/router';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit{
  trends: ITrend[];
  constructor(private homeService: HomeService,
              private route: ActivatedRoute) {
    this.trends = this.route.snapshot.data.trends;
  }

  getBackDropBase(){
    return `${environment.movieIMGURL}${BackdropSizes.Medium}`;
  }

  ngAfterViewInit(): void {
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      autoPlay: 5000,
    });
  }
}
