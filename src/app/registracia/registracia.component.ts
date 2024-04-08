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
    meno: ['', Validators.required],
    tel_cislo: ['', Validators.required],
    email: ['', Validators.required],
    heslo: ['', Validators.required],
    mesto: ['', Validators.required],
    ulica: ['', Validators.required],
    psc: ['', Validators.required]
  });
  onSubmit() {
    console.log(this.formular.value);
    if (this.formular.value.meno != null && this.formular.value.tel_cislo != null && this.formular.value.email != null && this.formular.value.heslo != null && this.formular.value.mesto != null && this.formular.value.ulica != null && this.formular.value.psc != null) {
      let zakaznik: Zakaznik = new Zakaznik(null, this.formular.value.meno, Number(this.formular.value.tel_cislo), this.formular.value.email, this.formular.value.heslo, this.formular.value.mesto, this.formular.value.ulica, Number(this.formular.value.psc));
      this.zakaznikService.vytvorZakaznika(zakaznik).subscribe({
        next: (id) => {
          console.log('zakaznikl vytvorený')
          zakaznik.id_zakaznika = id;
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

