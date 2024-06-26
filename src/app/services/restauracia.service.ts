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

  getRestauraciaById(restaurantId: number): Observable<Restauracia> {
    const url = `${this.apiUrlRestauracia}/${restaurantId}`;
    return this.http.get<Restauracia>(url);
  }

  vymazRestauraciu(restaurantId: number | null): Observable<void> {
    const url = `${this.apiUrlRestauracia}/vymazanie/${restaurantId}`;
    return this.http.delete<void>(url);
  }


}
