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
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatOption, MatSelect} from "@angular/material/select";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-jedlo-formular',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatCard,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatCheckbox,
    MatSelectionList,
    MatListOption,
    MatMenuTrigger,
    MatMenu,
    MatSelect,
    MatOption
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
    restaurantId: [''],
    allergens: [[], Validators.required]
  });

  onSubmit() {
    console.log(this.formular.value);
    if (this.formular.value.name != null && this.formular.value.description!= null && this.formular.value.price != null && this.formular.value.restaurantId != null && this.formular.value.allergens != null) {
      let food: Food = new Food(null, this.formular.value.name, this.formular.value.description, Number(this.formular.value.price), Number(this.formular.value.restaurantId), this.formular.value.allergens);
      this.foodService.vytvorJedlo(food).subscribe({
        next: (id) => {
          console.log('jedlo vytvorene')
          food.foodId= id;
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

  allergens = [
    { value: 1, label: '1 - Obilniny obsahujúce lepok' },
    { value: 2, label: '2 - Kôrovce a výrobky z nich' },
    { value: 3, label: '3 - Vajcia a výrobky z nich' },
    { value: 4, label: '4 - Ryby a výrobky z nich' },
    { value: 5, label: '5 - Arašidy a výrobky z nich' },
    { value: 6, label: '6 - Sójové zrná a výrobky z nich' },
    { value: 7, label: '7 - Mlieko a výrobky z neho' },
    { value: 8, label: '8 - Orechy' },
    { value: 9, label: '9 - Zeler a výrobky z neho' },
    { value: 10, label: '10 - Horčica a výrobky z nej' },
    { value: 11, label: '11 - Sezamové semená a výrobky z nich' },
    { value: 12, label: '12 - Oxid siričitý a siričitany' },
    { value: 13, label: '13 - Vlčí bob a výrobky z neho' },
    { value: 14, label: '14 - Mäkkýše a výrobky z nich' }
  ];

}

