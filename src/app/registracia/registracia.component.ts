import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {ZakaznikService} from "../services/zakaznik.service";
import {Zakaznik} from "../model/zakaznik.model";


@Component({
  selector: 'app-registracia',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './registracia.component.html',
  styleUrl: './registracia.component.css'
})
export class RegistraciaComponent {
  constructor(private formBuilder: FormBuilder, private zakaznikService: ZakaznikService) {}

  @Output() newZakaznikEvent = new EventEmitter<Zakaznik>();


  formular = this.formBuilder.group({
    username: ['', Validators.required],
    telNumber: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    cityName: ['', Validators.required],
    streetName: ['', Validators.required],
    postCode: ['', Validators.required]
  });
  onSubmit() {
    console.log(this.formular.value);
    if (this.formular.value.username != null && this.formular.value.telNumber != null && this.formular.value.email != null && this.formular.value.password != null && this.formular.value.cityName != null && this.formular.value.streetName != null && this.formular.value.postCode != null) {
      let zakaznik: Zakaznik = new Zakaznik(null, this.formular.value.username, Number(this.formular.value.telNumber), this.formular.value.email, this.formular.value.password, this.formular.value.cityName, this.formular.value.streetName, Number(this.formular.value.postCode));
      this.zakaznikService.vytvorZakaznika(zakaznik).subscribe({
        next: (id) => {
          console.log('zakaznikl vytvorený')
          zakaznik.customerId = id;
          this.newZakaznikEvent.emit(zakaznik);
        },
        error: (e) => {
          console.error('chyba vytvarania zakaznika!')
        },
        complete: () => {
          console.log('hotovo')
        }
      });
    }
  }
}

