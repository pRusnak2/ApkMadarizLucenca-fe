import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage, CommonModule } from "@angular/common";
import { AuthService } from "./services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MatIconModule, MatMenuModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuickEats';

  constructor(public authService: AuthService, private router: Router,private snackBar: MatSnackBar) {}

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
        this.snackBar.open('Boli ste úspešne odhlásený', 'Zavrieť', {
          duration: 10000
        });
      },
      error: (e: any) => {
        alert('Chyba pri odhlasovaní: ' + e);
      }
    });
  }
}
