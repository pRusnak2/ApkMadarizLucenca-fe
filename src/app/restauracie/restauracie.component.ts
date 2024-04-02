import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-restauracie',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './restauracie.component.html',
  styleUrl: './restauracie.component.css'
})
export class RestauracieComponent {

}
