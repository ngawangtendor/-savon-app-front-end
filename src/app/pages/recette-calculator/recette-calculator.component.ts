import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIngredientPickerComponent } from '../../shared/modal-ingredient-picker/modal-ingredient-picker.component';
import { Ingredient } from '../../models/class/Ingredient';
import { IngredientService } from '../../services/ingredient.service';
import { LigneIngredient } from '../../models/class/LigneIngredient';

@Component({
  selector: 'app-recette-calculator',
  templateUrl: './recette-calculator.component.html',
  styleUrl: './recette-calculator.component.css'
})
export class RecetteCalculatorComponent implements OnInit {
  availableIngredients: Ingredient[] = []; // à alimenter via service
  selectedIngredients: LigneIngredient[] = []; // Liste des ingrédients sélectionnés
  
  constructor(
    private ingredientService: IngredientService,
    private modalService: NgbModal
  ) {}
  
  /**
   * Appel du service de récupération des ingrédients à l'initialisation
   */
  ngOnInit(): void {
    this.loadIngredients();
  }
  
  loadIngredients(): void { 
    // Notez que j'utilise getAllIngredient() car c'est le nom de la méthode
    // définie dans votre service IngredientService (d'après les documents fournis)
    this.ingredientService.getAllIngredient().subscribe({
      next: (ingredients) => {
        this.availableIngredients = ingredients;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des ingrédients', err);
      }
    });
  }
  
  /**
   * Modal de sélection des ingrédients.
   */
  openIngredientModal(): void {
    const modalRef = this.modalService.open(ModalIngredientPickerComponent);
    modalRef.componentInstance.ingredients = this.availableIngredients;
    
    modalRef.result.then((selectedIngredient: Ingredient) => {
      if (selectedIngredient) {
        this.ajouterIngredient(selectedIngredient);
      }
    }).catch(() => {});
  }
  
  /**
   * Méthode d'ajout d'un ingrédient à la recette
   * @param ingredient Ingrédient à ajouter à la recette
   */
  ajouterIngredient(ingredient: Ingredient): void {
    // Empêcher les doublons
    if (this.selectedIngredients.find(l => l.ingredientId === ingredient.id)) {
      return;
    }
    
    // En me basant sur votre modèle LigneIngredient défini dans les fichiers
    this.selectedIngredients.push({
      ligneId: 0, // valeur temporaire pour l'instant
      ingredientId: ingredient.id, // Notez que j'utilise un tableau ici basé sur votre modèle
      quantite: 0,
      ingredient:ingredient,
      pourcentage: 0
    });
  }
  
  /**
   * Supprime un ingrédient préalablement choisi pour la recette en cours
   * @param index 
   */
  supprimerIngredient(index: number): void {
    this.selectedIngredients.splice(index, 1);
  }
}