import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.getUserId())  {
        return true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unauthorized',
          text: 'Please login to proceed',
        });
        this.router.navigate(['/']);
        return false;
      }
  }

}
