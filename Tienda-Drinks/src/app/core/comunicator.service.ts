import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Drink } from './models/drinks.model';

@Injectable({
  providedIn: 'root',
})
export class ComunicatorService {
  public base_url: string =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';




  
  constructor(private http: HttpClient) {}

  public getDrink(drinkName: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.base_url}${drinkName}`);
  }

  public dbUrl: string = 'http://localhost:3000/drinks';

  public getDrinkDb(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.dbUrl}`);
  }

  public creatDrink(body: Drink): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.dbUrl}`, body);
  }


}
