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
    console.log(user)
    console.log(user.userName);
    const userToSave = {
      username: user.userName,
      role: user.role
    };
    console.log(userToSave)
    localStorage.setItem('user', JSON.stringify(userToSave));
    console.log(userToSave)
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


  isUser(): boolean {
    const u = this.getUser();
    if (u == null || u.role.indexOf('ROLE_USER') == -1) {
      return false;
    }
    return true;
  }

  isAdmin(): boolean {
    const u = this.getUser();
    if (u == null || u.role.indexOf('ROLE_ADMIN') == -1) {
      return false;
    }
    return true;
  }

  logout(): Observable<any> {
    return this.http.delete(this.apiUrlAuth, {}).pipe(
      tap( () => { localStorage.removeItem('token'); localStorage.removeItem('user'); } )
    )
  }
}
