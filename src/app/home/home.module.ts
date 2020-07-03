import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BackdropImagePipe } from '../shared/pipes/backdrop-image.pipe';
import { TrendsResolver } from './trends.resolver';
import { TrendsCarouselComponent } from './trends-carousel/trends-carousel.component';



@NgModule({
  declarations: [
    HomeComponent,
    BackdropImagePipe,
    TrendsCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    TrendsResolver
  ]
})
export class HomeModule { }
