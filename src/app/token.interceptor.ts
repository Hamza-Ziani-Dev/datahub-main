import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { authService } from './components/auth/service/auth.service';
import { environment } from 'src/environments/environment';
import { catchError, filter, retry, switchMap, take, timeout } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  ID_TOKEN: string = environment.ID_TOKEN;
  ACCESS_TOKEN: string = environment.ACCESS_TOKEN;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(public auth: authService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.getToken()) {
      request = this.addToken(request, this.auth.getToken());
    }
// this.trackCustomEvent()
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>, token_: string) {
    const ID_TOKEN = localStorage.getItem(this.ID_TOKEN);
    const ACCESS_TOKEN = localStorage.getItem(this.ACCESS_TOKEN);
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        ...(ID_TOKEN ? { user: ID_TOKEN } : {}),
      },
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.auth?.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.accesstoken);
          return next.handle(this.addToken(request, token.accesstoken));
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((jwt) => {
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
  }
  // private trackCustomEvent() {
  //   if (
  //     ![undefined, null, "null", "undefined"].includes(this.auth.getUser()) &&
  //     this.auth.getToken()
  //   ) {
  //     // console.log(this.auth.getUser());
  //     window["dataLayer"] = window["dataLayer"] || [];
  //     window["dataLayer"].push({
  //       event: "login",
  //       userId: this.auth.getUser().id,
  //     });
  //   }
  // }
}

export const tokenInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
};