import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Zakaznik} from "../model/zakaznik.model";

@Injectable({
  providedIn: 'root'
})
export class ZakaznikService {

  private apiUrlZakaznik: string = "http://localhost:8080/zakaznik";

  constructor(private http: HttpClient) { }
  vytvorZakaznika(zakaznik: Zakaznik): Observable<number>{
    return this.http.post<number>(this.apiUrlZakaznik, zakaznik);
  }

}
