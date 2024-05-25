import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable, switchMap, tap} from "rxjs";
import {UserRolesDto} from "../model/zakaznik.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlAuth: string = "http://localhost:8080/api/authentication";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username +':'+ password)
    });
    return this.http.post<any>(this.apiUrlAuth, null, {headers, observe: 'response'}).pipe(
      tap((response: HttpResponse<any>) => this.setToken(response.headers.get("Authorization"))),
      switchMap((user: HttpResponse<any>) => this.http.get<any>(this.apiUrlAuth).pipe(
          tap((user: UserRolesDto) => this.setUser(user))
        )
      )
    )
  }

  setToken(token: string|null) {
    if (token != null) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setUser(user: UserRolesDto) {
    const userToSave = {
      username: user.userName,
      role: user.role
    };
    localStorage.setItem('user', JSON.stringify(userToSave));
  }

  getUser(): UserRolesDto|null {
    const s = localStorage.getItem('user');
    if (s != null)
      return JSON.parse(s);
    return null;
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }


  isCustomer(): boolean {
    const u = this.getUser();
    if (u?.role.indexOf("CUSTOMER") != -1) {
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    const u = this.getUser();
    if (u?.role.indexOf('ADMIN') != -1) {
      return true;
    }
    return false;
  }

  isRestaurant(): boolean {
    const u = this.getUser();
    console.log("som v isRestaurant() funkcii\n");
    console.log("hodnota toho: " + u?.role.indexOf("RESTAURANT"));
    if (u?.role.indexOf('RESTAURANT') != -1) {
      return true;
    }
    return false;
  }

  logout(): Observable<any> {
    return this.http.delete(this.apiUrlAuth, {}).pipe(
      tap( () => { localStorage.removeItem('token'); localStorage.removeItem('user'); } )
    )
  }
}
