import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIngredientPickerComponent } from '../../shared/modal-ingredient-picker/modal-ingredient-picker.component';
import { Ingredient } from '../../models/class/Ingredient';
import { IngredientService } from '../../services/ingredient.service';
import { LigneIngredient } from '../../models/class/LigneIngredient';
import { LigneIngredientDTO } from '../../models/DTO/LigneIngredientDTO';
import { RecetteDTO } from '../../models/DTO/RecetteDTO';
import { RecetteService } from '../../services/recette.service';

@Component({
  selector: 'app-recette-calculator',
  templateUrl: './recette-calculator.component.html',
  styleUrl: './recette-calculator.component.css'
})
export class RecetteCalculatorComponent implements OnInit {
  // Attributs :
  // -----------
  recetteDto: RecetteDTO = new RecetteDTO(); // Objet RecetteDTO de la nouvelle recette
  availableIngredients: Ingredient[] = []; // A alimenter via service
  selectedIngredients: LigneIngredient[] = []; // Liste des ingrédients sélectionnés
  totalMasse = 0; // Masse totale des corps gras

  constructor(
    private ingredientService: IngredientService,
    private recetteService: RecetteService,
    private modalService: NgbModal
  ) {}

  /**
   * Appel du service de récupération des ingrédients à l'initialisation
   */
  ngOnInit(): void {
    this.loadIngredients();
  }

  loadIngredients(): void {
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
    
    this.selectedIngredients.push({
      ligneId: 0, // valeur temporaire pour l'instant
      ingredientId: ingredient.id,
      ingredient: ingredient,
      quantite: 0,
      pourcentage: 0
    });
  }

  /**
   * Supprime un ingrédient préalablement choisi pour la recette en cours
   * @param index 
   */
  supprimerIngredient(index: number): void {
    this.selectedIngredients.splice(index, 1);
    this.recalculerPourcentages();
  }

  /**
   * Recalcule les pourcentages
   */
  recalculerPourcentages(): void {
    this.totalMasse = this.selectedIngredients.reduce((acc, ligne) => acc + ligne.quantite, 0); // Somme des masses des ingrédients de la recette
    
    this.selectedIngredients.forEach(ligne => {
      ligne.pourcentage = this.totalMasse > 0 ? + (ligne.quantite / this.totalMasse * 100).toFixed(0) : 0; // Calcul les pourcentages des ingrédients
    });
  }

  /**
   * Méthode de soumission du nouvel ingrédient
   */
  onSubmit(): void {
    // Associer les ingrédients au DTO :
    const ligneIngredientDTOs = this.selectedIngredients.map(ligne => ({
      quantite: ligne.quantite,
      pourcentage: ligne.pourcentage,
      ingredientId: ligne.ingredientId ?? 0
    }));

    // Finalisation de l'objet RecetteDTO :
    const recetteEnvoyee: RecetteDTO = {
      ...this.recetteDto,
      ligneIngredients: ligneIngredientDTOs
    };
    
    this.recetteService.addRecette(recetteEnvoyee).subscribe({
      next: (recette) => {
        console.log('Recette reçue du backend :', recette);
        // Redirection ou notification à l'utilisateur
        alert('Recette créée avec succès !');
      },
      error: (err) => {
        console.error('Erreur lors de la création de la recette :', err);
        alert('Erreur lors de la création de la recette');
      }
    });
  }
}