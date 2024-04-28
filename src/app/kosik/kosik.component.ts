import {Component, OnInit} from '@angular/core';
import {KosikService} from "../services/kosik.service";
import {Food} from "../model/food.model";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import { HttpClient } from '@angular/common/http';
import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-kosik',
  standalone: true,
  imports: [
    NgForOf,
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

  constructor(private kosikService: KosikService, private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    // Načítanie obsahu košíka pri inicializácii
    this.kosik = this.kosikService.getKosik();
  }

  odstranitJedlo(food: Food): void {
    this.kosikService.removeFromKosik(food);
    // Aktualizujte zoznam jedál v košíku
    this.kosik = this.kosikService.getKosik();
  }

  objednat(): void {
    const token = this.authService.getToken(); // Získanie tokenu
    if (token) {
      this.kosikService.odoslatObjednavku(token).subscribe({
        next: () => {
          // Vyčistenie košíka po úspešnom odoslaní objednávky
          this.kosikService.clearKosik();
          // Aktualizujte košík
          this.kosik = [];
          console.log(token);
          console.log(this.kosik);
        },
        error: (error) => {
          console.error('Chyba pri odoslaní objednávky:', error);
        }
      });
    } else {
      console.error('Chýbajúci token');
    }
  }
}
