import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterOutlet} from "@angular/router";
import {MatCard} from "@angular/material/card";
import {AuthService} from "../services/auth.service";
import {CommonModule} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-prihlasenie',
  standalone: true,
  imports: [FormsModule, RouterOutlet, MatCard, ReactiveFormsModule,CommonModule],
  templateUrl: './prihlasenie.component.html',
  styleUrl: './prihlasenie.component.css'
})
export class PrihlasenieComponent {
  form = new FormGroup ({
    username: new FormControl(undefined, Validators.required),
    password: new FormControl(undefined, Validators.required)
  });

  constructor(public authService: AuthService, private router: Router,private snackBar: MatSnackBar) {}

  login(): void {
    if (this.form.valid) {
      if (this.form.controls.username.value && this.form.controls.password.value) {
        this.authService.login(this.form.controls.username.value, this.form.controls.password.value).subscribe({
          next: () => {
            this.router.navigate(['/']);
            this.snackBar.open('Boli ste úspešne prihlásený', 'Zavrieť', {
              duration: 10000
            });
          },
          error: (e) => {
            alert(e);
          }
        });
      }else{
        alert("Prázdne meno heslo");
      }
    }else{
      alert("Neplatný formulár");
    }
  }



}
