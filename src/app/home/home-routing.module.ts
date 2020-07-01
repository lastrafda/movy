import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {TrendsResolver} from './trends.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      trends: TrendsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
