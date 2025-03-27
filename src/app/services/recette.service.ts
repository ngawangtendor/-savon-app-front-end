// src/app/services/recette.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recette } from '../models/class/Recette';
import { RecetteDTO } from '../models/DTO/RecetteDTO';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private apiUrl = "http://localhost:8080/api-savon/v1";
  
  constructor(private http: HttpClient) {}
  
  // Récupère toutes les recettes depuis l'API
  getAllRecette(): Observable<Recette[]> {
    return this.http.get<Recette[]>(`${this.apiUrl}/recette`);
  }

  // Récupère une recette par son id
  getRecetteById(id: number): Observable<Recette> {
    return this.http.get<Recette>(`${this.apiUrl}/recette/${id}`);
  }

  // Ajoute une nouvelle recette (modifié pour accepter RecetteDTO)
  addRecette(recette: RecetteDTO): Observable<Recette> {
    return this.http.post<Recette>(`${this.apiUrl}/recette`, recette);
  }

  // Met à jour une recette existante (modifié pour accepter RecetteDTO)
  updateRecette(id: number, recette: RecetteDTO): Observable<Recette> {
    return this.http.put<Recette>(`${this.apiUrl}/recette/${id}`, recette);
  }

  // Supprime une recette
  deleteRecette(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/recette/${id}`);
  }

  // Vous pouvez également ajouter cette méthode dédiée pour l'envoi du DTO
  addRecetteDTO(recetteDTO: RecetteDTO): Observable<Recette> {
    return this.http.post<Recette>(`${this.apiUrl}/recette`, recetteDTO);
  }
}