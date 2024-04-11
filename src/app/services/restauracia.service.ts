import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restauracia} from "../model/restauracia.model";

@Injectable({
  providedIn: 'root'
})
export class RestauraciaService {

  private apiUrlRestauracia: string = "http://localhost:8080/restauracia";

  constructor(private http: HttpClient) { }
  vytvorRestauraciu(restauracia: Restauracia): Observable<number>{
    return this.http.post<number>(this.apiUrlRestauracia, restauracia);
  }

  ziskajVsetkyObsahyRestauracii(sortBy: string): Observable<any[]> {
    const apiUrl = `${this.apiUrlRestauracia}/vsetky`;
    return this.http.get<any[]>(apiUrl);
  }

}
