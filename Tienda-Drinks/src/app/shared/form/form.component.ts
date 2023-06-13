import { Drink } from './../../core/models/drinks.model';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ComunicatorService } from 'src/app/core/comunicator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public formDrink?: FormGroup;
  public newDrink?:Drink;
  

  constructor(
    private fb: FormBuilder,
    private comunicatorService: ComunicatorService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.formDrink = this.fb.group({
      id: [this.newDrink?.id, [Validators.required]], 
      strDrink:[this.newDrink?.strDrink, [Validators.required]],
      strIngredient1: [this.newDrink?.strIngredient1, [Validators.required],],
      strIngredient2: [this.newDrink?.strIngredient2, [Validators.required],],
      strIngredient3: [this.newDrink?.strIngredient3],
      strIngredient4: [this.newDrink?.strIngredient4, ],
      strIngredient5: [this.newDrink?.strIngredient5,],
      strIngredient6: [this.newDrink?.strIngredient6, ],
      strAlcoholic: [this.newDrink?.strAlcoholic, [Validators.requiredTrue]],
      strInstructions:[this.newDrink?.strInstructions, [Validators.required, Validators.minLength(5)]],
      
    });

    this.formDrink.valueChanges.subscribe((changes)=>{
      this.newDrink = changes; 
    })
  }

  public isChecked1: boolean = false;
  public isChecked2: boolean = false;

  toggleCheckbox(checkboxNumber: number) {
    if (checkboxNumber === 1) {
      this.isChecked2 = false;
    } else if (checkboxNumber === 2) {
      this.isChecked1 = false;
    }
  }

  public creatDrink() {
    if (this.formDrink?.valid) {
     this.comunicatorService.creatDrink(this.formDrink.value)
     .subscribe()
        this.formDrink.reset();
        this.router.navigateByUrl('my-drinks')
    }
  }
}
