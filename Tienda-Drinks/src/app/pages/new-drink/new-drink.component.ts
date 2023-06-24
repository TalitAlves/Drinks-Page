
import { Component } from '@angular/core';


@Component({
  selector: 'app-new-drink',
  templateUrl: './new-drink.component.html',
  styleUrls: ['./new-drink.component.scss']
})
export class NewDrinkComponent  {

 public isDirty: boolean = false
 public setFormAsDirty(){
  this.isDirty = true
 }


}
