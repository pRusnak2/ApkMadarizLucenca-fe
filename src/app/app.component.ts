import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatIconModule, RouterModule, MatMenuModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuickEats';
}
