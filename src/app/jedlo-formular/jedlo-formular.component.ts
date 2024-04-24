import {Component, EventEmitter, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FoodService} from "../services/food.service";
import {Food} from "../model/food.model";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-jedlo-formular',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatCheckbox
  ],
  templateUrl: './jedlo-formular.component.html',
  styleUrl: './jedlo-formular.component.css'
})
export class JedloFormularComponent {
  constructor(private formBuilder: FormBuilder, private foodService: FoodService, private router: Router,private snackBar: MatSnackBar) {}

  @Output() newFoodEvent = new EventEmitter<Food>();

  formular = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    restaurantId: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.formular.value);
    if (this.formular.value.name != null && this.formular.value.description!= null && this.formular.value.price != null && this.formular.value.restaurantId != null) {
      let food: Food = new Food(null, this.formular.value.name, this.formular.value.description, Number(this.formular.value.price), Number(this.formular.value.restaurantId));
      this.foodService.vytvorJedlo(food).subscribe({
        next: (id) => {
          console.log('jedlo vytvorene')
          food.restaurantId = id;
          this.newFoodEvent.emit(food);
        },
        error: (e) => {
          console.error('chyba vytvarania restauracie!')
          this.router.navigate(['/jedlo-formular']);
          this.snackBar.open('Jedlo nebolo pridané, skúste to znova', 'Zavrieť', {
            duration: 15000
          });
        },
        complete: () => {
          console.log('hotovo')
          this.router.navigate(['/restauracie']);
          this.snackBar.open('Jedlo bolo pridané!', 'Zavrieť', {
            duration: 15000
          });
        }
      });
    }
  }
}
