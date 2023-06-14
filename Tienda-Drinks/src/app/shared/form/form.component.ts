import { Drink } from './../../core/models/drinks.model';
import { Component, Input } from '@angular/core';
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
export class FormComponent {
  public formDrink?: FormGroup;
  public newDrink?: Drink;
  public previewImg:string = ''; 
  
 @Input() public drink?: Drink
 

  constructor(
    private fb: FormBuilder,
    private comunicatorService: ComunicatorService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.formDrink = this.fb.group({
      strDrink: [this.drink?.strDrink || this.newDrink?.strDrink, [Validators.required]],
      strIngredient1: [this.drink?.strIngredient1 || this.drink?.strIngredient1 || this.newDrink?.strIngredient1, [Validators.required]],
      strIngredient2: [this.drink?.strIngredient2,this.newDrink?.strIngredient2,this.newDrink?.strIngredient2,this.newDrink?.strIngredient2, [Validators.required]],
      strIngredient3: [this.drink?.strIngredient3 || this.newDrink?.strIngredient3],
      strIngredient4: [this.drink?.strIngredient4 || this.newDrink?.strIngredient4],
      strIngredient5: [this.drink?.strIngredient5 || this.drink?.strIngredient3 || this.newDrink?.strIngredient5],
      strIngredient6: [this.drink?.strIngredient6 ||this.newDrink?.strIngredient6],
      strAlcoholic: [this.drink?.strAlcoholic||this.newDrink?.strAlcoholic, [Validators.requiredTrue]],
      strInstructions: [ this.drink?.strInstructions ||
        this.newDrink?.strInstructions,
        [Validators.required, Validators.minLength(5)],
      ],
      strDrinkThumb: [this.drink?.strDrinkThumb || this.newDrink?.strDrinkThumb, ""]
    });
    this.previewImg = this.newDrink?.strDrinkThumb || '';
    this.formDrink?.get('strDrinkThumb')?.valueChanges.subscribe((value)=>{
      this.previewImg = value
    })

  
  }

  public isChecked1: boolean = false;
  public isChecked2: boolean = false;

  toggleCheckbox(checkboxNumber: number) {
    if (checkboxNumber === 1) {
      this.isChecked2 = false;
      console.log(`1 ${this.isChecked1}`)
    } else if (checkboxNumber === 2) {
      this.isChecked1 = false;
      console.log(`2 ${this.isChecked2}`)
    }
  }

  public creatDrink() {
    if (this.formDrink?.valid) {
      const drinkEdit = this.drink 
      ? this.comunicatorService.editDrink(this.drink.id, this.formDrink.value) :
      this.comunicatorService.creatDrink(this.formDrink.value);
        drinkEdit.subscribe((newDrink: Drink) => {
          this.router.navigateByUrl('my-drinks');
        });
      this.formDrink?.reset();

    }
  }


  
}
