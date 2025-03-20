import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/class/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private apiUrl = "http://localhost:8080/api-savon/v1/ingredient";
  constructor(private http: HttpClient) {}

  // Récupère tous les ingrédients depuis l'API
  getAllIngredient(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.apiUrl}`);
  }

  getIngredientById(id: number): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.apiUrl}/${id}`);
  }

  postIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.apiUrl}`, ingredient);
  }

  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.apiUrl, ingredient);
  }

  updateIngredient(id: number, ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.apiUrl}/${id}`, ingredient);
  }

  deleteIngredient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteAllIngredient(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/all`);
  }
  
}


