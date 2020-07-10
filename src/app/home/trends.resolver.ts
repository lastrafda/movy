import { Injectable } from '@angular/core';
import { ThemoviedbService } from '../themoviedb.service';
import { Resolve } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable()
export class TrendsResolver implements Resolve<any> {
  constructor(private homeService: ThemoviedbService) {
  }

  resolve() {
    return this.homeService.getTrends()
      .pipe(map(res => res.results));
  }
}
