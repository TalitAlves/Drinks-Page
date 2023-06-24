import { Drink } from './../../core/models/drinks.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  public previewImg: string = '';
  public countIngredient: number = 2;

  @Input() public drink?: Drink;
  @Output() public OnFormDurty: EventEmitter<void> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private comunicatorService: ComunicatorService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.formDrink = this.fb.group({
      strDrink: [
        this.drink?.strDrink || this.newDrink?.strDrink,
        [Validators.required, Validators.maxLength(30)],
      ],
      strIngredient1: [
        this.drink?.strIngredient1 ||
          this.drink?.strIngredient1 ||
          this.newDrink?.strIngredient1,
        [Validators.required, Validators.maxLength(20)],
      ],
      strIngredient2: [
        this.drink?.strIngredient2 ||
          this.drink?.strIngredient2 ||
          this.newDrink?.strIngredient2,

        [Validators.required, Validators.maxLength(20)],
      ],
      strIngredient3: [
        this.drink?.strIngredient3 || this.newDrink?.strIngredient3,
        Validators.maxLength(20)],
      strIngredient4: [
        this.drink?.strIngredient4 || this.newDrink?.strIngredient4,
        Validators.maxLength(20)],
      strIngredient5: [
        this.drink?.strIngredient5 ||
          this.drink?.strIngredient5 ||
          this.newDrink?.strIngredient5,
          Validators.maxLength(20) ],
      strIngredient6: [
        this.drink?.strIngredient6 || this.newDrink?.strIngredient6,
        Validators.maxLength(20)],
      strMeasure1: [
        this.drink?.strMeasure1 || this.newDrink?.strMeasure1,
        Validators.maxLength(20) ],
      strMeasure2: [
        this.drink?.strMeasure2 || this.newDrink?.strMeasure2,
        Validators.maxLength(20) ],
      strMeasure3: [
        this.drink?.strMeasure3 || this.newDrink?.strMeasure3,
        Validators.maxLength(20) ],
      strMeasure4: [
        this.drink?.strMeasure4 || this.newDrink?.strMeasure4,
        Validators.maxLength(20)  ],
      strMeasure5: [
        this.drink?.strMeasure5 || this.newDrink?.strMeasure5,
        Validators.maxLength(20)],
      strMeasure6: [
        this.drink?.strMeasure6 || this.newDrink?.strMeasure6,
        Validators.maxLength(20) ],




      strAlcoholicYes: [
        this.drink?.strAlcoholic || 'Alcoholic',
        this.newDrink?.strAlcoholic,
      ],
      strAlcoholicNo: [
        this.drink?.strAlcoholic || 'No alcoholic',
        this.newDrink?.strAlcoholic,
      ],
      strInstructions: [
        this.drink?.strInstructions || this.newDrink?.strInstructions,
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
      ],
      strDrinkThumb: [
        this.drink?.strDrinkThumb || this.newDrink?.strDrinkThumb,
        '',
      ],
    });
    this.previewImg = this.newDrink?.strDrinkThumb || '';
    this.formDrink?.get('strDrinkThumb')?.valueChanges.subscribe((value) => {
      this.previewImg = value;
    });

    this.formDrink?.valueChanges.subscribe(() => {
      if (this.formDrink?.dirty) {
        this.OnFormDurty.emit();
      }
    });
  }

  public addIngredients(event: Event ) {
    event.preventDefault()
    this.countIngredient++;
    console.log(this.countIngredient)
  }
  public removeIngredients(event: Event) {
    event.preventDefault()
    this.countIngredient--;
    console.log(this.countIngredient)
  }

  public saveDrink() {
    if (this.formDrink?.valid) {
      let drink = this.formDrink?.value;
      drink.ownCreation = 'true';
      const drinkEdit = this.drink
        ? this.editDrink(this.drink.id, drink)
        : this.createDrink(drink);

      drinkEdit.subscribe((newDrink: Drink) => {
        this.router.navigateByUrl('my-drinks');
      });
      this.formDrink?.reset();
    }
  }

  public editDrink(id: string, drink: Drink) {
    return this.comunicatorService.editDrink(id, drink);
  }

  public createDrink(newDrink: Drink) {
    return this.comunicatorService.createDrink(newDrink);
  }
}
