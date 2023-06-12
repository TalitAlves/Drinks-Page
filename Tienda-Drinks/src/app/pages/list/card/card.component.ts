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

  public getIngredients(){
    
   if(this.drink?.strIngredient1 != null){
    this.ingredients.push(this.drink.strIngredient1)
   }
   if(this.drink?.strIngredient2 != null){
    this.ingredients.push(this.drink.strIngredient2)
   }
   if(this.drink?.strIngredient3 != null){
    this.ingredients.push(this.drink.strIngredient3)
   }
   if(this.drink?.strIngredient4 != null){
    this.ingredients.push(this.drink.strIngredient4)
   }
   if(this.drink?.strIngredient5 != null){
    this.ingredients.push(this.drink.strIngredient5)
   }
   if(this.drink?.strIngredient6 != null){
    this.ingredients.push(this.drink.strIngredient6)
   }
   if(this.drink?.strIngredient7 != null){
    this.ingredients.push(this.drink.strIngredient7)
   }
   if(this.drink?.strIngredient8 != null){
    this.ingredients.push(this.drink.strIngredient8)
   }

   }


  // public getIngridients(){
  //   for (let i = 1; i <= 8; i++) {
  //     let ingredient: string = this.drink?[`strIngredient${i}`]
  //     if(ingredient != null) {
  //       this.ingredients.push(ingredient);
  //     }
  //   }
  // }

  
public showDetail(drink: Drink){
  this.showDetails = !this.showDetails;
  if(this.showDetails){
   this.details =  drink.strInstructions
   this.ingredients=[]
  } else{
    this.details = ''
    
  }
  
} 
}
