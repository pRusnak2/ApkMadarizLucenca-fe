import {Component, OnInit} from '@angular/core';
import {ObjednavkyService} from "../services/objednavky.service";
import {Order} from "../model/order.model";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-objednavky',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatDivider
  ],
  templateUrl: './objednavky.component.html',
  styleUrl: './objednavky.component.css'
})
export class ObjednavkyComponent implements OnInit  {

  objednavky: Order[] = [];

  constructor(private objednavkyService: ObjednavkyService) {}
  ngOnInit(): void {
    this.objednavkyService.getOrders().subscribe(
      (data) => {
        this.objednavky = data;
      },
      (error) => {
        console.error('Chyba pri načítaní objednávok:', error);
      }
    );
  }

}
