export class Objednavky {
  orderId: number | null;
  foodId: number | null;


  constructor(restaurantId: number | null, foodId: number | null) {
    this.orderId = restaurantId;
    this.foodId = foodId;
  }
}
