import { LigneIngredient } from "./LigneIngredient";

export class Ingredient {
    id: number | null = null;
    nom:String = "";
    iode:number = 0;
    ins:number = 0;
    sapo:number= 0;
    volMousse:number = 0;
    tenueMousse:number =0;
    douceur:number = 0;
    lavant:number = 0;
    durete:number = 0;
    solubilite:number = 0;
    sechage:number = 0;
    estCorpsGras:boolean=true;
    ligneIngredients : LigneIngredient[] = [] 
}

export const DEFAULT_INGREDIENT: Ingredient = {
    id: null,
    nom: '',
    iode: 0,
    ins: 0,
    sapo: 0,
    volMousse: 0,
    tenueMousse: 0,
    douceur: 0,
    lavant: 0,
    durete: 0,
    solubilite: 0,
    sechage: 0,
    estCorpsGras: true,
    ligneIngredients: []
};