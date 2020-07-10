import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import {MoviesRoutingModule} from './movies-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MoviesModule { }
