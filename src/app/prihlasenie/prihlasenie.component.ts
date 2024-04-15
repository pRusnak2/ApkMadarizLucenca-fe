import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-prihlasenie',
  standalone: true,
    imports: [FormsModule, RouterOutlet, MatCard],
  templateUrl: './prihlasenie.component.html',
  styleUrl: './prihlasenie.component.css'
})
export class PrihlasenieComponent {

}
