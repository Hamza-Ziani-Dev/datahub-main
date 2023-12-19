import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from 'src/app/components/auth/service/auth.service';
import { User } from 'src/app/components/main-nav/main-nav.component';

@Injectable({
  providedIn: 'root'
})
export class DatahubGuard implements CanActivate {
  user: User;
  constructor(private authService: authService) {
    authService.getUpdatedUser()
      .subscribe(
        (user: User) => {
          this.user = user;
        }
      );
    authService.getUser();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.authService.isNewsVersion();
    // if (this.user?.type == 'owner') {
    //   return true;
    // }

    return true;
    return this.authService.goToDefaultNavigate();
  }

}
