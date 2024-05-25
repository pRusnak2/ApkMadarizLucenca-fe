import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Food } from '../model/food.model';
import { KosikService } from '../services/kosik.service';
import { Order } from '../model/order.model';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {MatLabel} from "@angular/material/form-field";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-kosik',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardSubtitle,
    MatCardHeader,
    MatDivider,
    MatButton,
    MatRadioGroup,
    MatCheckbox,
    MatRadioButton,
    MatSelect,
    MatFormField,
    MatOption,
    MatLabel
  ],
  templateUrl: './kosik.component.html',
  styleUrls: ['./kosik.component.css']
})
export class KosikComponent implements OnInit {
  kosik: Food[] = [];
  paymentMethod: string = 'card';
  ageVerified: boolean = false;
  deliveryTimeOption: number = 30;

  customerTelNumber!: number;
  customerEmail!: string;
  customerStreetName!: string;
  customerCityName!: string;
  customerPostCode?: number;
  customerFirstName!: string;
  customerLastName!: string;

  constructor(
    private kosikService: KosikService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.kosik = this.kosikService.getKosik();
    if (!this.authService.isLoggedIn()) {
      this.notlogin();
    }
  }

  showAlert = false;
  notlogin(): void {
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  odstranitJedlo(food: Food): void {
    this.kosikService.removeFromKosik(food);
    this.kosik = this.kosikService.getKosik();
  }

  getTotalPrice(): number {
    return this.kosik.reduce((total, food) => total + food.price, 0);
  }

  objednat(): void {
    // Check if age is verified
    if (!this.ageVerified) {
      this.snackBar.open('Pre pokračovanie musíte potvrdiť, že máte viac ako 16 rokov.', 'Zavrieť', {
        duration: 10000
      });
      return;
    }

    const orderTime = new Date();
    const deliveryTime = new Date();
    deliveryTime.setHours(deliveryTime.getHours() + Math.floor(this.deliveryTimeOption / 60));
    deliveryTime.setMinutes(deliveryTime.getMinutes() + this.deliveryTimeOption % 60);


    const foodIds = this.kosik.map(food => food.foodId).filter(id => id !== null) as number[];
    const foodNames = this.kosik.map(food => food.name);

    const order: Order = {
      orderTime: orderTime,
      deliveryTime: deliveryTime,
      status: 'PENDING',
      foodIds: foodIds,
      foodNames: foodNames,

      customerTelNumber: this.customerTelNumber,
      customerEmail: this.customerEmail,
      customerStreetName: this.customerStreetName,
      customerCityName: this.customerCityName,
      customerPostCode: this.customerPostCode !== undefined ? this.customerPostCode : 0,
      customerFirstName: this.customerFirstName,
      customerLastName: this.customerLastName
    };

    this.kosikService.createOrder(order).subscribe(
      response => {
        console.log('Objednávka úspešne odoslaná:', response);
        this.kosikService.clearKosik();
        this.router.navigate(['/restauracie']);
        this.snackBar.open('Objednávka bola vytvorená', 'Zavrieť', {
          duration: 10000
        });
      },
      error => {
        console.error('Chyba pri odosielaní objednávky:', error);
        this.snackBar.open('Chyba pri odosielaní objednávky, skúste to znova', 'Zavrieť', {
          duration: 10000
        });
      }
    );
  }
}
