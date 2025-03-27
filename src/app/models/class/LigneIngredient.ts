import { Ingredient } from "./Ingredient";
import { Recette } from "./Recette";

export class LigneIngredient {
    ligneId: number | null = null;
    quantite : number = 0;
    pourcentage : number = 0;
    ingredientId : number|null =null
    ingredient:Ingredient|null=null
}