import { Component, OnInit } from '@angular/core';
import * as Flickity from 'Flickity';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true
    });
  }
}
