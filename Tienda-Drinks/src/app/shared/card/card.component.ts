import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicatorService } from 'src/app/core/comunicator.service';
import { Drink } from 'src/app/core/models/drinks.model';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/pages/dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private service:ComunicatorService, private router:Router, private local:Location, 
    public dialog: MatDialog){}

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
        
    });
}

public openConfirmDialog(drink: Drink): void {
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '300px',
    data: 'Tem certeza que deseja deletar o drink?'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.deleteDrink(drink);
    }
  });
}


public deleteDrink(drink:Drink){
  
  this.service.deleteDrink(drink.id).subscribe(()=>{
    this.getDrinkDb()
    window.location.reload();
  })
 
}



}
