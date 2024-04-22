export class Food {
  foodId: number;
  name: string;
  price: number;
  restaurantId: number | null;

  constructor(foodId: number, name: string, price: number, restaurantId: number | null) {
    this.foodId = foodId;
    this.name = name;
    this.price = price;
    this.restaurantId = restaurantId;
  }
}
