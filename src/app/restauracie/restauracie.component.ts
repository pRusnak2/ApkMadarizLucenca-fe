import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {Restauracia} from "../model/restauracia.model";
import {RestauraciaService} from "../services/restauracia.service";
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-restauracie',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule, MatProgressBarModule, MatButtonModule, MatDividerModule, MatCardModule],
  templateUrl: './restauracie.component.html',
  styleUrl: './restauracie.component.css'
})
export class RestauracieComponent implements OnInit {
  restauracie: Restauracia[] = [];

  constructor(private restauraciaService: RestauraciaService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.ziskajVsetkyRestauracie();
  }

  mesto: string = '';
  typ: string = '';

  ziskajVsetkyRestauracie(): void {
    // @ts-ignore
    this.restauraciaService.ziskajVsetkyObsahyRestauracii().subscribe({
      next: (vsetkyRestauracie) => {
        this.restauracie = vsetkyRestauracie.filter(restauracia =>
          (this.mesto ? restauracia.cityName === this.mesto : true) &&
          (this.typ ? restauracia.type === this.typ : true)
        );
      },
      error: (error) => {
        console.error('Chyba pri získavaní reštaurácií', error);
      }
    });
  }

  zmenaZoradeniaMesta(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // Typovanie na HTMLSelectElement
    this.mesto = selectElement.value;
    this.ziskajVsetkyRestauracie();
  }

  zmenaZoradeniaTypu(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // Typovanie na HTMLSelectElement
    this.typ = selectElement.value;
    this.ziskajVsetkyRestauracie();
  }

  getImage(type: string): string {
    switch(type) {
      case 'fastfood':
        return 'fastfood.jpg';
      case 'dezert':
        return 'desert.jpg';
      case 'azijska':
        return 'asian.jpg';
      case 'vegetarian':
        return 'vegetarian.jpg';
      default:
        return 'other.jpg';
    }
  }


}
