import { Drink, ApiResponse } from './../../core/models/drinks.model';
import { Component, OnInit } from '@angular/core';
import { ComunicatorService } from 'src/app/core/comunicator.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public drinks: Drink[] = [];
  public drinkName: string = '';
 
  constructor(private comunicatioService: ComunicatorService) {}

  public getDrinks() {
    this.comunicatioService
      .getDrink(this.drinkName)
      .subscribe((apiResponse: ApiResponse) => {
         this.drinks = apiResponse.drinks;
      });
  }

  

  public ngOnInit(): void {  
    this.getDrinks();
  }
}
