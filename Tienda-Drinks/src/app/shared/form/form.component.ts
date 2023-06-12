import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent  {

  public form?:FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  public OnInit():void{
    this.form = this.fb.group({

      name: new FormControl("" , [Validators.required]),
      ingridients: new FormControl('', )
    })
  }
}
