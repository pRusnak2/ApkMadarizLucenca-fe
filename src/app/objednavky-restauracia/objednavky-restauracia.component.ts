import { Component } from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {Order} from "../model/order.model";
import {ObjednavkyService} from "../services/objednavky.service";

@Component({
  selector: 'app-objednavky-restauracia',
  standalone: true,
    imports: [
        DatePipe,
        MatButton,
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle,
        MatDivider,
        NgForOf,
        NgIf
    ],
  templateUrl: './objednavky-restauracia.component.html',
  styleUrl: './objednavky-restauracia.component.css'
})
export class ObjednavkyRestauraciaComponent {

  objednavky: Order[] = [];

  constructor(private objednavkyService: ObjednavkyService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.objednavkyService.getOrdersRestaurant().subscribe(
      (data) => {
        this.objednavky = data;
      },
      (error) => {
        console.error('chyba pri nacitavani:', error);
      }
    );
  }

  deleteOrder(orderId: number | undefined): void {
    if (orderId !== undefined) {
      this.objednavkyService.deleteOrder(orderId).subscribe(
        () => {

          this.loadOrders();
        },
        (error) => {
          console.error('chyb pri mazazni', error);
        }
      );
    }
  }

  updateOrderStatus(objednavka: Order, newStatus: string): void {
    if (objednavka.orderId !== undefined) {
      this.objednavkyService.updateOrderStatus(objednavka.orderId, newStatus).subscribe(
        () => {

          this.loadOrders();
        },
        (error) => {
          console.error('chyba pri aktu:', error);
        }
      );
    }
  }


}
