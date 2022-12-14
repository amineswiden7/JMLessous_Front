import { ProduitFinancier } from './../produitFinancier/produit-financier';
import { Portfeuille } from './../portfeuille/portfeuille';

export class Ordre {
    idOrdre : number;
    date : Date;
    prix : number;
    quantite : number;
    typeOrdre : string;
    portfeuille : Portfeuille;
    produitFinancier : ProduitFinancier;
}
