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

  formular: FormGroup = this.formBuilder.group({
    nazov: ['', Validators.required],
    typ: ['', Validators.required],
    tel_cislo: ['', Validators.required],
    heslo: ['', Validators.required],
    mesto: ['', Validators.required],
    ulica: ['', Validators.required],
    psc: ['', Validators.required]
  });

  onSubmit() {
    console.log(this.formular.value);
    if (this.formular.value.nazov != null && this.formular.value.typ != null && this.formular.value.tel_cislo != null && this.formular.value.heslo != null && this.formular.value.mesto != null && this.formular.value.ulica != null && this.formular.value.psc != null) {
        let restauracia: Restauracia = new Restauracia(null, this.formular.value.nazov, this.formular.value.typ, Number(this.formular.value.tel_cislo), this.formular.value.heslo, this.formular.value.mesto, this.formular.value.ulica, Number(this.formular.value.psc));
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
