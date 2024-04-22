import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Food} from "../model/food.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrlRestauraciaDetail: string = "http://localhost:8080/food/restaurant/";
  private apiUrlFood: string = "http://localhost:8080/food/";

  constructor(private http: HttpClient) { }

  foodByRestaurantId(restaurantId: number): Observable<Food[]> {
    const url = `${this.apiUrlRestauraciaDetail}${restaurantId}`;
    return this.http.get<Food[]>(url);
  }

  deleteFoodById(foodId: number): Observable<void> {
    const url = `${this.apiUrlFood}vymazanie/${foodId}`;
    return this.http.delete<void>(url);
  }
}
