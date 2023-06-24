import { ComunicatorService } from './../../core/comunicator.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from 'src/app/core/models/drinks.model';

import { Drink } from 'src/app/core/models/drinks.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  public drink?: Drink;
  public drinks?: Drink[] = [];
  public strDrink: string = '';
  public ingredients: string[]  = []
  public measures: string[]  = []


  constructor(
    private route: ActivatedRoute,
    private service: ComunicatorService
  ) {
    this.route.params.subscribe((params) => {
      const idDrink = params['strDrink'];
      
      this.service.getDrink(idDrink).subscribe((apiResponse: ApiResponse) => {
        this.drinks = apiResponse.drinks;
            
        this.drink = this.drinks[0]
       
        this.getIngridients()
      });
    });
  }

  
  
  public getIngridients(){
    this.ingredients = [];
    this.measures = [];
    
    if(this.drink){
    for (let i = 1; i <= 8; i++) {
    const measureSting = `strMeasure${i}` as keyof Drink
     const ingridientsString =`strIngredient${i}` as keyof Drink;
      
     let ingredient = this.drink[ingridientsString]
     let measure = this.drink[measureSting]
      
      if(ingredient != null) {
        this.ingredients.push(ingredient);
      }
      if(measure != null){
        this.measures.push(measure)
      }
    }
  }
  }



}