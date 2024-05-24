import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-uvod',
  standalone: true,
    imports: [
        RouterLink,
      MatButton
    ],
  templateUrl: './uvod.component.html',
  styleUrl: './uvod.component.css'
})
export class UvodComponent {

}
