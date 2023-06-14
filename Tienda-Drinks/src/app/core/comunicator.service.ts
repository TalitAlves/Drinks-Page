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
 
  public getDrinkDb(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.dbUrl}`);
  }

  public creatDrink(body: Drink): Observable<Drink> {
      return this.http.post<Drink>(this.dbUrl, body);
  }

  public deleteDrink(id:string): Observable<Drink>{
    return this.http.delete<Drink>(`${this.dbUrl}/${id}`)

  }

  public getDrinkDetail(id:string):Observable<Drink>{
    return this.http.get<Drink>(`${this.dbUrl}/${id}`)
  }

  public editDrink(id:string, body:Drink):Observable<Drink>{
    return this.http.put<Drink>(`${this.dbUrl}/${id}`, body)
  }


}
