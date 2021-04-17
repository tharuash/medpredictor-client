import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  logoutSubscription: Subscription;
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  goToWeatherSite() {
    console.log('routing')
    window.open('https://www.bbc.com/weather/1248991', '_blank');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
