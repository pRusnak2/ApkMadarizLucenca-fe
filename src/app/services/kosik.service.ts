import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Food } from '../model/food.model';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class KosikService {
  private kosik: Food[] = [];
  private apiUrlOrder: string = 'http://localhost:8080/order';

  constructor(private http: HttpClient) {}

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

  odoslatObjednavku(token: string): Observable<any> {
    const objednavka: Order = {
      orderTime: new Date(),
      deliveryTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      status: 'Nová'
    };

    return this.http.post<any>(this.apiUrlOrder, objednavka, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
