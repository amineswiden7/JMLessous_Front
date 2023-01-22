import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OffreAssurance } from 'src/app/components/models/offre-assurance';
import {ContratAssurance} from '../../components/models/contrat-assurance';

@Injectable({
  providedIn: 'root'
})
export class OffreAssuranceService {
  url = 'http://localhost:8083/JMLessous/';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getOffresAssurance(): Observable<OffreAssurance[]>{
    return this.http.get<OffreAssurance[]>(this.url + 'getAllOffres');
  }

  getOffreById(id: any): Observable<OffreAssurance>{
    return this.http.get<OffreAssurance>(this.url + 'getOffre/' + id);
  }

  getOffreByStatut(statut: any): Observable<OffreAssurance[]>{
    return this.http.get<OffreAssurance[]>(this.url + 'getAlloffresByStatut/' + statut);
  }

  getOffresByCateg(categ: any): Observable<OffreAssurance[]>{
    return this.http.get<OffreAssurance[]>(this.url + 'getAlloffresByCategorie/' + categ);
  }

  getPubOffresByCateg(categ: any): Observable<OffreAssurance[]>{
    return this.http.get<OffreAssurance[]>(this.url + 'getAllPubOffresByCategorie/' + categ);
  }

  getAvOffresByCateg(categ: any): Observable<OffreAssurance[]>{
    return this.http.get<OffreAssurance[]>(this.url + 'getAllAvOffresByCategorie/' + categ);
  }

  addOffreAssurance(c: any): Observable<OffreAssurance>{
    return this.http.post<OffreAssurance>(
          this.url + 'addOffre',
          JSON.stringify(c),
          this.httpOptions
        );
  }

  updateOffreAssurance(c: OffreAssurance): Observable<OffreAssurance>{
    return this.http.put<OffreAssurance>(
      this.url + 'updateoffre',
      JSON.stringify(c),
      this.httpOptions
    );
  }

  calculatePrimeAut(params: any): Observable<number>{
    return this.http.post<number>(
      this.url + 'calculateAutPrime',
      JSON.stringify(params),
      this.httpOptions
    );
  }

  saveContract(contrat: ContratAssurance, idUser: number, idOffre: number): Observable<ContratAssurance>{
    return this.http.post<ContratAssurance>(
      this.url + 'addContrat/' + idOffre.toString() + '/' + idUser.toString(),
      JSON.stringify(contrat),
      this.httpOptions
    );
  }

  getContratsByOffre(id: any): Observable<ContratAssurance[]>{
    return this.http.get<ContratAssurance[]>(this.url + 'getAllContratsByOffre/' + id);
  }

  getContratsByUser(id: any): Observable<ContratAssurance[]>{
    return this.http.get<ContratAssurance[]>(this.url + 'getAllContratsByUtilisateur/' + id);
  }

  declineContrat(id: any): Observable<ContratAssurance>{
    return this.http.put<ContratAssurance>(this.url + 'declineContrat/' + id, null, this.httpOptions);
  }

  acceptContrat(id: any): Observable<ContratAssurance>{
    return this.http.put<ContratAssurance>(this.url + 'acceptContrat/' + id, null, this.httpOptions);
  }

}
