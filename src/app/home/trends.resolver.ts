import { Injectable } from '@angular/core';
import { HomeService } from './home.service';
import { Resolve } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable()
export class TrendsResolver implements Resolve<any> {
  constructor(private homeService: HomeService) {
  }

  resolve() {
    return this.homeService.getTrends()
      .pipe(map(res => res.results));
  }
}
