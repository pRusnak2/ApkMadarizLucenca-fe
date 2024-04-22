import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../model/food.model';
import {FormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {NgForOf} from "@angular/common";
import {Restauracia} from "../model/restauracia.model";
import {RestauraciaService} from "../services/restauracia.service";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-restauracia-detail',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatFormFieldModule,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatDivider,
    NgForOf,
    MatButton,
    MatFormField,
    MatSelect,
    MatOption
  ],
  templateUrl: './restauracia-detail.component.html',
  styleUrl: './restauracia-detail.component.css'
})
export class RestauraciaDetailComponent implements OnInit {
  restauracia: Restauracia | null = null;
  foods: Food[] = [];
  restaurantId: number =0;

  constructor(private route: ActivatedRoute, private foodService: FoodService, private restauraciaService: RestauraciaService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurantId = +params['restaurantId'];
      this.loadFoods();
      this.loadRestauracia();
    });
  }

  loadFoods(): void {
    this.foodService.foodByRestaurantId(this.restaurantId).subscribe({
      next: (foods) => {
        this.foods = foods;
      },
      error: (error) => {
        console.error('Chyba pri načítaní jedál', error);
      }
    });
  }

  loadRestauracia(): void {
    this.restauraciaService.getRestauraciaById(this.restaurantId).subscribe({
      next: (restauracia) => {
        this.restauracia = restauracia;
      },
      error: (error) => {
        console.error('Chyba pri načítaní reštaurácie', error);
      }
    });
  }

  deleteFoodById(foodId: number): void {
    this.foodService.deleteFoodById(foodId).subscribe(
      () => {
        console.log('Jedlo úspešne vymazané.');
        this.loadFoods();
      },
        (error: any) => {
        console.error('Chyba pri vymazávaní jedla:', error);
      }
    );
  }


  selectedSortType: string = 'desc';

  sortFoodsByPrice() {
    const sortType = this.selectedSortType;

    if (sortType === 'asc') {
      this.foods.sort((a, b) => a.price - b.price);
    } else if (sortType === 'desc') {
      this.foods.sort((a, b) => b.price - a.price);
    }
  }




  addToCart(food: Food) {

  }
}
