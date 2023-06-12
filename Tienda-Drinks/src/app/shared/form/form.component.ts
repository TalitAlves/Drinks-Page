import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Drink } from 'src/app/core/models/drinks.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public formDrink?: FormGroup;
  public newDrinks?: Drink [] = []

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.formDrink = this.fb.group({
      strDrink: new FormControl('', [Validators.required]),
      strIngredient1: new FormControl('', [Validators.required]),
      strIngredient2: new FormControl('', [Validators.required]),
      strIngredient3: new FormControl(''),
      strIngredient4: new FormControl(''),
      strIngredient5: new FormControl(''),
    });
  }

  public creatDrink(){
    if(this.formDrink?.valid){
       this.newDrinks?.push({...this.formDrink.value})
       this.formDrink.reset
       

    }

}

}



