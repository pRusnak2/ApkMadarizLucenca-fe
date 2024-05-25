export interface Order {
  orderId?: number;
  orderTime: Date;
  deliveryTime: Date;
  status: string;
  foodIds: number[];
  foodNames: string[];
  customerTelNumber: number;
  customerEmail: string;
  customerStreetName: string;
  customerCityName: string;
  customerPostCode: number;
  customerFirstName: string;
  customerLastName: string;
}
