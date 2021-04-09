import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToWeatherSite() {
    console.log('routing')
    window.open('https://www.bbc.com/weather/1248991', '_blank');
  }

}
