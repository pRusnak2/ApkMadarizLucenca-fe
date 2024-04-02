import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-restauracia-formular',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './restauracia-formular.component.html',
  styleUrl: './restauracia-formular.component.css'
})
export class RestauraciaFormularComponent {

}
