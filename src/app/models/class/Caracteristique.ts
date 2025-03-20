import { Mention } from "./Mention";
import { Resultat } from "./Resultat";

export class Caracteristique {
    id: number | null = null;
    nom : string = "";
    mentions : Mention [] = [];
    resultats : Resultat [] = [];
  }