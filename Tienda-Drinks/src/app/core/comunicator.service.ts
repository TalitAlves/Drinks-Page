import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable,} from 'rxjs'
import { ApiResponse} from './models/drinks.model';

@Injectable({
  providedIn: 'root'
})
export class ComunicatorService {

  public base_url:string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' 

  constructor(private http:HttpClient) {}

 

    public getDrink(drinkName:string): Observable<ApiResponse>{
        return this.http.get<ApiResponse>(`${this.base_url}${drinkName}`)
         
    }
   
}
