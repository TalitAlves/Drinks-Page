import { ApiResponse } from './../../core/models/drinks.model';
import { Component, OnInit } from '@angular/core';
import { ComunicatorService } from 'src/app/core/comunicator.service';

import { Drink } from 'src/app/core/models/drinks.model';

@Component({
  selector: 'app-my-drinks',
  templateUrl: './my-drinks.component.html',
  styleUrls: ['./my-drinks.component.scss'],
})
export class MyDrinksComponent implements OnInit {
  constructor(private comunicatorService:ComunicatorService) {}

  public drinks: Drink[] = [];

  
  public getDrinkDb() {
    this.comunicatorService
      .getDrinkDb()
      .subscribe((apiResponse: ApiResponse) => {
        this.drinks = apiResponse.drinks
        console.log(this.drinks)
      });
  }

  public ngOnInit(): void {
    this.getDrinkDb();
  }
}
