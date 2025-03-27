import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../services/recette.service';
import { Recette } from '../../models/class/Recette';
import { Caracteristique } from '../../models/class/Caracteristique';


 
@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrl: './recettes.component.css'
})
export class RecettesComponent implements OnInit {
  recettes : Recette[] = [];
  caracteristique : Caracteristique[] = []

  constructor(private simulateurService:RecetteService ) { }

  ngOnInit(): void {
    this.simulateurService.getAllRecette().subscribe({
      next: (data) => this.recettes = data,
      error: (err) => console.error('Erreur lors du chargement des ingrédients : ', err)
    });
  }
}
