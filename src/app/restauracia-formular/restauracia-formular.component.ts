import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {Restauracia} from "../model/restauracia.model";
import {RestauraciaService} from "../services/restauracia.service";

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

  constructor(private formBuilder: FormBuilder, private restauraciaService: RestauraciaService) {}

  @Output() newRestauraciaEvent = new EventEmitter<Restauracia>();

  //formular: = this.formBuilder.group({
  formular = this.formBuilder.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    telNumber: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    streetName: ['', Validators.required],
    cityName: ['', Validators.required],
    postCode: ['', Validators.required]
  });

  onSubmit() {
    console.log(this.formular.value);
    if (this.formular.value.name != null && this.formular.value.type != null && this.formular.value.telNumber != null && this.formular.value.username != null && this.formular.value.password != null && this.formular.value.cityName != null && this.formular.value.streetName != null && this.formular.value.postCode != null) {
        let restauracia: Restauracia = new Restauracia(null, this.formular.value.name, this.formular.value.type, Number(this.formular.value.telNumber), this.formular.value.username, this.formular.value.password, this.formular.value.streetName, this.formular.value.cityName, Number(this.formular.value.postCode));
        this.restauraciaService.vytvorRestauraciu(restauracia).subscribe({
          next: (id) => {
            console.log('restauracia vytvorena')
            restauracia.id_restauracie = id;
            this.newRestauraciaEvent.emit(restauracia);
          },
          error: (e) => {
            console.error('chyba vytvarania restauracie!')
          },
          complete: () => {
            console.log('hotovo')
          }
        });
    }
  }
}
