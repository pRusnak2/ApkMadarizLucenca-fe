import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-mesta',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './mesta.component.html',
  styleUrl: './mesta.component.css'
})
export class MestaComponent {

}
