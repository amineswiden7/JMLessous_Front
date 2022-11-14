import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteepargneService {
  private API_URL = "http://localhost:8083/JMLessous/Compte";
  constructor(private httpClient: HttpClient) { }

  getAllCompteE(){
    return this.httpClient.get(`${this.API_URL}/ListaccountsE`)
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
