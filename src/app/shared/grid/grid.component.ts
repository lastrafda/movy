import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IPopularMovie} from '../models/popular.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() popularMovies: IPopularMovie[];
  constructor() { }
}
