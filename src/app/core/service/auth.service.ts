import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credential } from '@model/credential.model';
import { CookieService } from 'ngx-cookie-service';
import { ApiEndPoints } from 'src/app/core/constant/ApiEndPoints';
import { TokenKey } from '../constant/TokenKey';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private config = { path: '/', secure: true };

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(credentials: Credential): void {
    this.http.post(ApiEndPoints.LOGIN, credentials).subscribe(
      (response: any) => {
        this.cookieService.set(TokenKey.ACCESS_TOKEN_KEY, response[TokenKey.ACCESS_TOKEN_KEY], this.config);
        this.cookieService.set(TokenKey.REFRESH_TOKEN_KEY, response[TokenKey.REFRESH_TOKEN_KEY], this.config);
      }
    );
  }

  refreshToken(refreshToken: String): Observable<any> {
    return this.http.post(ApiEndPoints.REFRESH, { token: refreshToken }).pipe(
      tap((response: any) => {
        this.cookieService.set(TokenKey.ACCESS_TOKEN_KEY, response[TokenKey.ACCESS_TOKEN_KEY], this.config);
        this.cookieService.set(TokenKey.REFRESH_TOKEN_KEY, response[TokenKey.REFRESH_TOKEN_KEY], this.config);
      })
    );
  }

}
