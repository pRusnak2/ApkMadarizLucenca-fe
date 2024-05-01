import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Injectable } from '@angular/core';
import { Food } from '../model/food.model';
import { AuthService } from "../services/auth.service";
import {Order} from "../model/order.model";

@Injectable({
  providedIn: 'root'
})
export class KosikService {
  private kosik: Food[] = [];
  private apiUrlOrder: string = 'http://localhost:8080/order';

  constructor(private http: HttpClient,  private authService: AuthService) {}

  addToKosik(food: Food): void {
    this.kosik.push(food);
  }

  removeFromKosik(food: Food): void {
    const index = this.kosik.indexOf(food);
    if (index !== -1) {
      this.kosik.splice(index, 1);
    }
  }

  getKosik(): Food[] {
    return this.kosik;
  }

  clearKosik(): void {
    this.kosik = [];
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrlOrder, order);
  }

}
