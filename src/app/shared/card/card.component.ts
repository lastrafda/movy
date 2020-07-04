import {Component, Input} from '@angular/core';
import {IPopularMovie} from '../models/popular.model';
import {faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faClock as fasClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() movie: IPopularMovie;
  fasHeart: any;
  farHeart: any;
  fasClock: any;
  faCheck: any;
  faStar: any;
  isLiked: boolean;
  isInWatchList: boolean;
  constructor() {
    this.fasHeart = fasHeart;
    this.farHeart = farHeart;
    this.fasClock = fasClock;
    this.faCheck = faCheck;
    this.faStar = faStar;
    this.isLiked = false;
    this.isInWatchList = false;
  }
}
