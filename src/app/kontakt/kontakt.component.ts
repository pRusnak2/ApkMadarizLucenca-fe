import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIcon,
    MatButtonModule, MatCard],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.css'
})
export class KontaktComponent {

  constructor(private formBuilder: FormBuilder) {}

  formular = this.formBuilder.group({
    meno: [""],
    email: [""],
  });





}
