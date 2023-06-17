import { ApiResponse } from './../../core/models/drinks.model';
import { Component, Input } from '@angular/core';
import { Drink } from 'src/app/core/models/drinks.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() drink?:Drink


  public showDetails: boolean = false;
  public details:string = ''
  
  public ingredients: string[]  = []
  public measures: string[]  = []


   public getIngridients(){
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

  
public showDetail(drink: Drink){
  this.showDetails = !this.showDetails;
  if(this.showDetails){
   this.details =  drink.strInstructions
   this.ingredients=[]
   this.measures = []
  } else{
    this.details = ''
    
  }
  
} 
}
