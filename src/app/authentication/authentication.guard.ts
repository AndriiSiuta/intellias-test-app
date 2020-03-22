import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['auth']);
    return false;
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }
}
