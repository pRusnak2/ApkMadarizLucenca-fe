import { Component, OnInit } from '@angular/core';
import { KosikService } from '../services/kosik.service';
import { Food } from '../model/food.model';
import { NgForOf, CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-kosik',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatDivider
  ],
  templateUrl: './kosik.component.html',
  styleUrl: './kosik.component.css'
})
export class KosikComponent implements OnInit {
  kosik: Food[] = [];

  constructor(private kosikService: KosikService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.kosik = this.kosikService.getKosik();
  }

  odstranitJedlo(food: Food): void {
    this.kosikService.removeFromKosik(food);
    this.kosik = this.kosikService.getKosik();
  }

  objednat(): void {
    const orderTime = new Date();
    const deliveryTime = new Date();
    deliveryTime.setMinutes(deliveryTime.getMinutes() + 30);

    const foodIds = this.kosik.map(food => food.foodId).filter((id): id is number => id !== null); // Filtrovanie null hodnôt

    const order: Order = {
      orderTime: orderTime,
      deliveryTime: deliveryTime,
      status: 'PENDING',
      foodIds: foodIds,
      foodNames: [] // Pridajte prázdne pole foodNames
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
