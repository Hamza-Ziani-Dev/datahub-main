import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from 'src/app/components/auth/service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(private authService: authService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authService.isTokenExpired()) {
            // console.log("cccc");
            return true;
        }
       this.router.navigate(['/']);
        return false;
    }

}