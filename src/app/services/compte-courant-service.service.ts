import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteCourantServiceService {

  private API_URL = "http://localhost:8083/JMLessous/Compte";
  constructor(private httpClient: HttpClient) { }
  getAllCompteC(){
    return this.httpClient.get(`${this.API_URL}/Listaccounts`)
  }
  addCompteC(CompteCourant : any,iduser :any) {
    return this.httpClient.post(`${this.API_URL}/AddAccount/`+iduser,CompteCourant)
  }
 
}
