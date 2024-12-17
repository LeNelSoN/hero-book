import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { TokenKey } from '../../constant/TokenKey';
import { AuthService } from '@service/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class SilentRefreshInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService, private autService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const refreshToken = this.getRefreshToken();

        if (error.status === 403 && refreshToken) {

          this.deleteTokens();

          return this.autService.refreshToken(refreshToken).pipe(
            switchMap((tokens) => {
              return this.retryRequest(req, next, tokens[TokenKey.ACCESS_TOKEN_KEY]);
            }),
            catchError((refreshError) => {
              this.redirectToLogin();
              return throwError(() => refreshError);
            })
          );
        } else if (error.status === 403 && !refreshToken) {
          this.redirectToLogin();
        }

        return throwError(() => error);
      })
    );
  }

  private getRefreshToken(): string {
    return this.cookieService.get(TokenKey.REFRESH_TOKEN_KEY);
  }

  private deleteTokens(): void {
    this.cookieService.delete(TokenKey.ACCESS_TOKEN_KEY);
    this.cookieService.delete(TokenKey.REFRESH_TOKEN_KEY);
  }

  private redirectToLogin(): void {
    if (this.router.url !== '/login') {
      this.router.navigate(['/login']);
    }
  }

  private retryRequest(req: HttpRequest<any>, next: HttpHandler, token: string): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(clonedReq);
  }
}
