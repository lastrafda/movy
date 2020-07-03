import {Component, ViewEncapsulation} from '@angular/core';
import {HomeService} from './home.service';
import {ITrend} from '../shared/models/trend.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  trends: ITrend[];
  constructor(private homeService: HomeService,
              private route: ActivatedRoute) {
    this.trends = this.route.snapshot.data.trends;
  }
}
