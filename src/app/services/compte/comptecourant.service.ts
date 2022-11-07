import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompteCourant } from 'src/app/models/compte-courant';

@Injectable({
  providedIn: 'root'
})
export class ComptecourantService {
  private API_URL = "http://localhost:8083/JMLessous/Compte";
  constructor(private httpClient: HttpClient) { }

  getAllCompteC(){
    return this.httpClient.get(`${this.API_URL}/Listaccounts`)
  }
  addCompteC(CompteCourant : any,iduser :any) {
    return this.httpClient.post(`${this.API_URL}/AddAccount/${iduser}`,CompteCourant)
  }

  editCompteC(CompteCourant : any){
    return this.httpClient.put(`${this.API_URL}/modify-Account`, CompteCourant)
  }

  deleteCompteC(idCompteCourant : any){
    return  this.httpClient.delete(`${this.API_URL}/DeleteAccount/${idCompteCourant}`)
  }
  archiveCompteC(CompteCourant : any,cid :any){
    return  this.httpClient.put(`${this.API_URL}/archive-cpt/${cid}`, CompteCourant)
  }
 
}
