import {AfterViewInit, Component, Input, ViewEncapsulation} from '@angular/core';
import {ITrend} from '../../shared/models/trend.model';
import {environment} from '../../../environments/environment';
import {BackdropSizes} from '../../shared/enums/backdrop-sizes.enum';

@Component({
  selector: 'app-trends-carousel',
  templateUrl: './trends-carousel.component.html',
  styleUrls: ['./trends-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrendsCarouselComponent implements AfterViewInit{
  @Input() trends: ITrend[];
  constructor() { }
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

  getBackDropBase(){
    return `${environment.movieIMGURL}${BackdropSizes.Medium}`;
  }
}
