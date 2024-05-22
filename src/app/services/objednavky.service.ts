import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class ObjednavkyService {

  private apiUrlOrderDetail: string = 'http://localhost:8080/orders';
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrlOrderDetail);
  }
}
