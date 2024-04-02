import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';


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
  constructor(private formBuilder: FormBuilder) {}

  formular = this.formBuilder.group({
    meno: [""],
    tel_cislo: [""],
    email: [""],
    heslo: [""],
    mesto: [""],
    ulica: [""],
    psc: [""]
  });
}
