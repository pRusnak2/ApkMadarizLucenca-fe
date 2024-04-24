export class Food {
  foodId:number | null;
  name: string;
  description: string;
  price: number;
  restaurantId: number | null;
  allergens: { allergenId: number, name: string }[];


  constructor(foodId: number | null, name: string, description: string, price: number, restaurantId: number | null, allergens: { allergenId: number, name: string }[] = []) {
    this.foodId = foodId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.restaurantId = restaurantId;
    this.allergens = allergens;
  }
}
