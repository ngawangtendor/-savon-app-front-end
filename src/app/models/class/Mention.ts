import { Caracteristique } from "./Caracteristique";
import { Resultat } from "./Resultat";

export  class Mention {
    id: number | null = null;
    label: String = ""; 
    noteMin: number = 0;
    noteMax: number = 0;
    caracteristique : Caracteristique[] = []
    resultat : Resultat[] = []
  }