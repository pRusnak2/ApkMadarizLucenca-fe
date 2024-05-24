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

  deleteOrder(orderId: number): Observable<void> {
    const deleteUrl = `${this.apiUrlOrderDetail}/vymazanie/${orderId}`;
    return this.http.delete<void>(deleteUrl);
  }

  updateOrderStatus(orderId: number, status: string): Observable<Order> {
    const updateUrl = `${this.apiUrlOrderDetail}/update/${orderId}`;
    return this.http.put<Order>(updateUrl, status);
  }

  getOrdersRestaurant(): Observable<Order[]> {
    const restaurantUrl = `${this.apiUrlOrderDetail}/restauracia`;
    return this.http.get<Order[]>(restaurantUrl);
  }

}
