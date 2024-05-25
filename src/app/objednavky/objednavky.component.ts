import { Component, OnInit} from '@angular/core';
import { ObjednavkyService } from '../services/objednavky.service';
import { Order } from '../model/order.model';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {CommonModule} from "@angular/common";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-objednavky',
  templateUrl: './objednavky.component.html',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatButton,
    MatDivider,
    MatCardTitle,
    CommonModule,
    MatCardSubtitle
  ],
  styleUrls: ['./objednavky.component.css']
})
export class ObjednavkyComponent implements OnInit{

  objednavky: Order[] = [];

  constructor(private objednavkyService: ObjednavkyService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadOrders();
    if (!this.authService.isLoggedIn()) {
      this.notlogin();
    }
  }

  loadOrders(): void {
    this.objednavkyService.getOrders().subscribe(
      (data) => {
        this.objednavky = data;
      },
      (error) => {
        console.error('chyba pri nacitavani:', error);
      }
    );
  }

  showAlert = false;
  notlogin(): void {
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
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
