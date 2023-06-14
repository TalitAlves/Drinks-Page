import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComunicatorService } from 'src/app/core/comunicator.service';
import { Drink } from 'src/app/core/models/drinks.model';


@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrls: ['./edit-drink.component.scss']
})
export class EditDrinkComponent {
  public drink?:Drink

  constructor(private comunicatorService: ComunicatorService, private activetedRoute: ActivatedRoute){

    this.activetedRoute.params.subscribe((params)=>{
      const idDrink = params['id'];
      this.comunicatorService.getDrinkDetail(idDrink).subscribe((drink:Drink)=>{
          this.drink = drink        
      })
    })


  }

}
