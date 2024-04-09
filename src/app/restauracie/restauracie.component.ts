import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {Restauracia} from "../model/restauracia.model";
import {RestauraciaService} from "../services/restauracia.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restauracie',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule],
  templateUrl: './restauracie.component.html',
  styleUrl: './restauracie.component.css'
})
export class RestauracieComponent implements OnInit {
  restauracie: Restauracia[] = [];

  constructor(private restauraciaService: RestauraciaService) { }

  ngOnInit(): void {
    this.ziskajVsetkyRestauracie();
  }

  ziskajVsetkyRestauracie(): void {
    this.restauraciaService.ziskajVsetkyObsahyRestauracii().subscribe({
      next: (restauracie) => {
        this.restauracie = restauracie;
      },
      error: (error) => {
        console.error('Chyba pri získavaní reštaurácií', error);

      }
    });
  }
}
