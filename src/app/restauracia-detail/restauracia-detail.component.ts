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
import {MatList, MatListItem} from "@angular/material/list";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import { KosikService } from '../services/kosik.service';
import {MatSnackBar} from "@angular/material/snack-bar";


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
    MatOption,
    MatList,
    MatListItem,
    MatMenuItem,
    MatMenu,
    MatMenuTrigger
  ],
  templateUrl: './restauracia-detail.component.html',
  styleUrl: './restauracia-detail.component.css'
})
export class RestauraciaDetailComponent implements OnInit {
  restauracia: Restauracia | null = null;
  foods: Food[] = [];
  restaurantId: number =0;

  constructor(private route: ActivatedRoute, private foodService: FoodService, private restauraciaService: RestauraciaService, private kosikService: KosikService, private snackBar: MatSnackBar ) {}

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

  deleteFoodById(foodId: number | null): void {
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

  getImage(type: string | undefined): string {
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


  addToCart(food: Food): void {
    this.kosikService.addToKosik(food);
    this.snackBar.open(`${food.name} bolo pridané do košíka.`, 'Zavrieť', {
      duration: 3000
    });
  }
}
