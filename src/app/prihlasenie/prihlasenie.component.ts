import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterOutlet} from "@angular/router";
import {MatCard} from "@angular/material/card";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-prihlasenie',
  standalone: true,
  imports: [FormsModule, RouterOutlet, MatCard, ReactiveFormsModule],
  templateUrl: './prihlasenie.component.html',
  styleUrl: './prihlasenie.component.css'
})
export class PrihlasenieComponent {
  form = new FormGroup ({
    username: new FormControl(undefined, Validators.required),
    password: new FormControl(undefined, Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.form.valid) {
      if (this.form.controls.username.value && this.form.controls.password.value) {
        this.authService.login(this.form.controls.username.value, this.form.controls.password.value).subscribe({
          next: () => {
            this.router.navigate(['/']);
            console.log("prihlasany");
          },
          error: (e) => {
            console.log(e);
          }
        });
      }else{
        console.log("prazdne meno heslo");
      }
    }else{
      console.log("neplatny formular");
    }
  }

  auth(): AuthService {
    return this.authService;
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => console.log('odhlaseny..')
    });
  }

}
