import { Mention } from "./Mention";
import { Resultat } from "./Resultat";
import { Recette } from "./Recette";

export class Caracteristique {
    id: number | null = null;
    nom : string = "";
    mentions : Mention [] = [];
    resultats : Resultat [] = [];
  }