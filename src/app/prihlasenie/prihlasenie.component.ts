import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-prihlasenie',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './prihlasenie.component.html',
  styleUrl: './prihlasenie.component.css'
})
export class PrihlasenieComponent {

}
