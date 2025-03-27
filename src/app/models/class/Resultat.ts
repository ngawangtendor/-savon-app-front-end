import { Caracteristique } from "./Caracteristique";
import { Mention } from "./Mention";
import { Recette } from "./Recette";

export class Resultat {
    resultatId: number | null = null;
    score : number = 0;
    recette : Recette | null = null;
    caracteristique : Caracteristique | null = null;
    mention : Mention | null = null;
}