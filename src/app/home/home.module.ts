import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BackdropImagePipe } from '../shared/pipes/backdrop-image.pipe';
import { TrendsResolver } from './trends.resolver';



@NgModule({
  declarations: [
    HomeComponent,
    BackdropImagePipe
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
