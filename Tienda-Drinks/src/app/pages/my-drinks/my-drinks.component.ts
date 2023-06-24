import { ApiResponse, Criteria } from './../../core/models/drinks.model';
import { Component, Input, OnInit } from '@angular/core';

import { ComunicatorService } from 'src/app/core/comunicator.service';

import { Drink } from 'src/app/core/models/drinks.model';

@Component({
  selector: 'app-my-drinks',
  templateUrl: './my-drinks.component.html',
  styleUrls: ['./my-drinks.component.scss'],
})
export class MyDrinksComponent implements OnInit {
  public criteria?: Criteria;

  constructor(private comunicatorService: ComunicatorService) {}

  public drinks: Drink[] = [];
  public basicImage: string = 'assets/cocktail_time.jpg';


  public getDrinkDb() {
    this.comunicatorService.getDrinkDb().subscribe((drink: Drink[]) => {
      this.drinks = drink;
    });
  }

  public deleteDrink(drink: Drink) {
    this.comunicatorService.deleteDrink(drink.id).subscribe(() => {
      this.getDrinkDb();
    });
  }

  public ngOnInit(): void {
    this.getDrinkDb();
  }
}
