import {Utilisateur} from '../../models/utilisateur';
import {OffreAssurance} from './offre-assurance';

export class ContratAssurance {
  idContrat: number;
  dateDebut: Date;
  dateFin: Date;
  dateAjout: Date;
  nomPrenomAssure: string;
  cinAssure: number;
  telAssure: number;
  emailAssure: string;
  type: string;
  categorie: string;
  regulated: boolean;
  prime: number;
  typePrime: string;
  nbreAnnuites: number;
  nbreRemb: number;
  montantRente: number;
  statut: string;
  interet: number;
  commission: number;
  utilisateurCA: Utilisateur;
  offreAssurance: OffreAssurance;
}
