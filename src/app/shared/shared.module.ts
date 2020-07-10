import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {GridComponent} from './components/grid/grid.component';
import {BackdropImagePipe} from './pipes/backdrop-image.pipe';
import {PosterImagePipe} from './pipes/poster-image.pipe';
import {FontAwesomeTestingModule} from "@fortawesome/angular-fontawesome/testing";

@NgModule({
  imports: [CommonModule, FontAwesomeTestingModule],
  declarations: [CardComponent, GridComponent, BackdropImagePipe, PosterImagePipe],
  exports: [CardComponent, CommonModule, GridComponent, BackdropImagePipe, PosterImagePipe]
})
export class SharedModule {
}
