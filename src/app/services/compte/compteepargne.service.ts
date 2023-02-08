import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompteEpargne } from 'src/app/models/compte-epargne';

@Injectable({
  providedIn: 'root'
})
export class CompteepargneService {
  private API_URL = "http://localhost:8083/JMLessous/Compte";
  constructor(private httpClient: HttpClient) { }

  getAllCompteE(): Observable<CompteEpargne[]>{
    return this.httpClient.get<CompteEpargne[]>(`${this.API_URL}/ListaccountsE`)
  }
  getCE(iduser :any) {
    return this.httpClient.get<CompteEpargne[]>(`${this.API_URL}/ListaE/${iduser}`);
  }
  getCompteE(id:any):Observable<CompteEpargne>{
    return this.httpClient.get<CompteEpargne>(`${this.API_URL}/compteE/${id}`)
  }
  addCompteE(CompteEpargne : any,iduser :any) {
    return this.httpClient.post(`${this.API_URL}/AddAccountE/${iduser}`,CompteEpargne)
  }
  editCompteE(CompteEpargne : any){
    return this.httpClient.put(`${this.API_URL}/modify-AccountE`, CompteEpargne)
  }
  deleteCompteE(idCompteEpargne : any){
    return  this.httpClient.delete(`${this.API_URL}/DeleteAccountE/${idCompteEpargne}`)
  }
  archiveCompteE(CompteEpargne : any,ceid :any){
    return  this.httpClient.put(`${this.API_URL}/archive-cptE/${ceid}`, CompteEpargne)
  }
 
}
