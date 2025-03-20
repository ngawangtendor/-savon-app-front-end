import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recette } from '../models/class/Recette';


@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private apiUrl = "http://localhost:8080/api-savon/v1";
  constructor(private http: HttpClient) {}
  // Récupère tous les ingrédients depuis l'API
  getAllRecette(): Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.apiUrl}/recette`);
  }

  getRecetteById(id: number): Observable<Recette> {
    return this.http.get<Recette>(`${this.apiUrl}/${id}`);
  }

  addRecette(recette: Recette): Observable<Recette> {
    return this.http.post<Recette>(this.apiUrl, recette);
  }

  updateRecette(id: number, recette: Recette): Observable<Recette> {
    return this.http.put<Recette>(`${this.apiUrl}/${id}`,recette);
  }

  deleteRecette(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteAllRecette(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/all`);
  }
}


