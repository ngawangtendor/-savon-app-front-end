import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../models/class/Ingredient';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrl: './ingredient-create.component.css'
})
export class IngredientCreateComponent{
onSubmit() {
throw new Error('Method not implemented.');
}
  //attribut du ingredient 
  ingredient:Ingredient=new Ingredient()
constructor(private ingredientService:IngredientService){

}
//envoie les requet au serveur et puis au base de donnée
submitIngredient(){
  this.ingredientService.addIngredient(this.ingredient).subscribe({
    next:(resultat)=>{
      console.log("Ajout d'un ingredient")
      console.log(resultat)
    }
  })
}
 
}
