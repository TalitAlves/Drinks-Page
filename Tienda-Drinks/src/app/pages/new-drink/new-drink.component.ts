import { ApiResponse } from './../../core/models/drinks.model';
import { Component, OnInit } from '@angular/core';
import { ComunicatorService } from 'src/app/core/comunicator.service';

@Component({
  selector: 'app-new-drink',
  templateUrl: './new-drink.component.html',
  styleUrls: ['./new-drink.component.scss']
})
export class NewDrinkComponent  {

  public drinkName: string = ''

constructor(private comunicatorService:ComunicatorService){}

// public getDrinskDb(){
//   this.comunicatorService.getDrinkDb(this.drinkName).subscribe((apiresponse: ApiResponse)=>{
//     console.log(apiresponse)
//   })
// }

// public ngOnInit(): void {
//   this.getDrinskDb()
// }

}
