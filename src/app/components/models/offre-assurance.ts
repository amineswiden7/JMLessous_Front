import {ScoreBonus} from './score-bonus';
import {ScorePuiss} from './score-puiss';

export class OffreAssurance {
   idOffreAssurance: number ;
   minInteret: number;
   maxInteret: number;
   minPeriode: number;
   maxPeriode: number;
   primePure: number;
   interFlex: number;
   scoreHomme: number;
   scoreFemme: number;
   scoreCircMin: number;
   scoreCircMax: number;
   scoreValMin: number;
   scoreValMax: number;
   scoreBonus: ScoreBonus;
   scorePuissance: ScorePuiss;
   commission: number;
   type: string;
   categorie: string;
   image: string;
   description: string;
   shortDescription: string;
   assurance: string;
   typePeriode: string;
  statut: string;
  nbreContrats: number;
  gainTotal: number;
  lienForm: string;
  lienLogo: string;
  // idUser : number;
}
