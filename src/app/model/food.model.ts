export class Food {
  foodId: number | null;
  name: string;
  price: number;
  restaurantId: number | null;

  constructor(foodId: number | null, nazov: string, price: number, restaurantId: number | null) {
    this.foodId = foodId;
    this.name = nazov;
    this.price = price;
    this.restaurantId = restaurantId;

  }
}
