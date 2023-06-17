import { ApiResponse } from './../../core/models/drinks.model';
import { Component, Input } from '@angular/core';
import { ComunicatorService } from 'src/app/core/comunicator.service';
import { Drink } from 'src/app/core/models/drinks.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private service:ComunicatorService){}

  @Input() drink?:Drink

  public drinks: Drink[] = [];
  public showDetails: boolean = false;
  public details:string = ''
  public basicImage:string = "assets/cocktail_time.jpg"
  
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
public getDrinkDb() {
  this.service
    .getDrinkDb()
    .subscribe((drink:Drink[]) => {
        this.drinks = drink
        console.log(this.drinks)
     
    });
}

public deleteDrink(drink:Drink){
  
  this.service.deleteDrink(drink.id).subscribe(()=>{
    this.getDrinkDb()
  })
 
}
}
