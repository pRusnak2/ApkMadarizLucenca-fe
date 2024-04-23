export class Food {
  foodId:number | null;
  name: string;
  description: string;
  price: number;
  restaurantId: number | null;

  constructor(foodId: number | null, name: string, description: string, price: number, restaurantId: number | null) {
    this.foodId = foodId;
    this.description = description;
    this.name = name;
    this.price = price;
    this.restaurantId = restaurantId;
  }
}
