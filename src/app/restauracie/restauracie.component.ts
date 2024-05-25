import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterModule, RouterOutlet} from "@angular/router";
import {Restauracia} from "../model/restauracia.model";
import {RestauraciaService} from "../services/restauracia.service";
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectChange} from "@angular/material/select";
import { MatFormFieldModule } from '@angular/material/form-field';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-restauracie',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule, MatProgressBarModule,MatFormFieldModule, MatButtonModule, MatDividerModule, MatCardModule, RouterModule, MatFormField, MatSelect, MatOption],
  templateUrl: './restauracie.component.html',
  styleUrl: './restauracie.component.css'
})
export class RestauracieComponent implements OnInit {
  restauracie: Restauracia[] = [];

  constructor(private restauraciaService: RestauraciaService, private authService: AuthService) { }

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

  zmenaZoradeniaMesta(event: MatSelectChange): void {
    this.mesto = event.value; // Získať hodnotu z MatSelectChange
    this.ziskajVsetkyRestauracie();
  }

  zmenaZoradeniaTypu(event: MatSelectChange): void {
    this.typ = event.value; // Získať hodnotu z MatSelectChange
    this.ziskajVsetkyRestauracie();
  }
  vymazReatauraciu(restaurantId: number | null): void {
    this.restauraciaService.vymazRestauraciu(restaurantId).subscribe(
      () => {
        console.log('Restaurácia úspešne vymazaná.');
        this.ziskajVsetkyRestauracie();
      },
      error => {
        console.error('Chyba pri vymazávaní reštaurácie:', error.error);
      }
    );
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

  auth(): AuthService{
    return this.authService;
  }

}
