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
  constructor(private comunicatorService: ComunicatorService) {}

  public drinks: Drink[] = [];
  public drinkName: string = 'margarita';

  public getDrinkDb() {
    this.comunicatorService
      .getDrinkDb(this.drinkName)
      .subscribe((apiResponse: ApiResponse) => {
        console.log(apiResponse);
      });
  }

  public ngOnInit(): void {
    this.getDrinkDb();
  }
}
