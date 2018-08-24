import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    if (this.authService.user && this.checkIfLogged()) {
      if (this.authService.user.roles.includes(expectedRole)) {
        return true;
      }
    }

    return false;
  }

  checkIfLogged() {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
