import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Food} from "../model/food.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrlRestauraciaDetail: string = "http://localhost:8080/food/restaurant/";

  constructor(private http: HttpClient) { }

  foodByRestaurantId(restaurantId: number): Observable<Food[]> {
    const url = `${this.apiUrlRestauraciaDetail}${restaurantId}`;
    return this.http.get<Food[]>(url);
  }
}
