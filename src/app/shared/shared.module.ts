import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [ CommonModule],
  declarations: [CardComponent, GridComponent],
  exports: [CardComponent, CommonModule, GridComponent]
})
export class SharedModule {}
