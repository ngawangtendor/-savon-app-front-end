import { Ingredient } from "./Ingredient";
import { Recette } from "./Recette";

export class LigneIngredient {
    ligneId: number | null = null;
    quantite : number = 0;
    pourcentage : number = 0;
    ingredient : Ingredient[] = [];
    recette : Recette [] = [];
}