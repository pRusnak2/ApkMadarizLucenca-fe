import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-uvod',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './uvod.component.html',
  styleUrl: './uvod.component.css'
})
export class UvodComponent {

}
