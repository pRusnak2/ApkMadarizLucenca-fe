import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-restauracia-formular',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIcon,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './restauracia-formular.component.html',
  styleUrl: './restauracia-formular.component.css'
})
export class RestauraciaFormularComponent {

}
