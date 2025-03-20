import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../models/class/Ingredient';
@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})

export class IngredientsComponent implements OnInit{
  ingredients : Ingredient[] = [];
  constructor(private simulateurService: IngredientService ){}
  ngOnInit(): void {
    this.simulateurService.getAllIngredient().subscribe({
      next: (data) => this.ingredients = data,
      error: (err) => console.error('Erreur lors du chargement des ingrédients : ', err)
    });
  }
}
