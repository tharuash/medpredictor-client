import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paths } from '../paths';
import { AuthResponse } from '../models/auth.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // login user API call
  login(user: User): Observable<AuthResponse> {
    const url = Paths.baseAPIUrl + `/auth/login`;
    return this.http.post<any>(url, user).pipe(
      map((response) => {
        if (response.success) {
          sessionStorage.setItem('uid', response.entity.userId);
          sessionStorage.setItem('username', response.entity.username);
          return { success : true , message : ''};
        }else{
          return { success : false , message : response.error};
        }
      })
    );
  }

  // register user API call
  register(user: User): Observable<AuthResponse> {
    const url = Paths.baseAPIUrl + `/auth/register`;
    return this.http.post<any>(url, user).pipe(
      map((response) => {
        if (response.success) {
          sessionStorage.setItem('uid', response.entity.userId);
          sessionStorage.setItem('username', response.entity.username);
          return { success : true , message : ''};
        } else {
          return { success : false , message : response.error};
        }
      })
    );
  }

  getUserId(): string {
    return sessionStorage.getItem('uid');
  }

  getUsername(): string {
    return sessionStorage.getItem('username');
  }


  logout(): void {
    sessionStorage.clear();
  }
}
