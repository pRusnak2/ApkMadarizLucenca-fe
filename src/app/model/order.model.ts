export interface Order {
  orderId?: number;
  orderTime: Date;
  deliveryTime: Date;
  status: string;
  foodIds: number[];
  foodNames: string[]; // Pridajte tento riadok
}
