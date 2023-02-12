import { CreditEtudiant } from "src/app/models/creditEtudiant";


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amortissement } from 'src/app/models/amortissement';

@Injectable({
  providedIn: 'root'
})

export class CreditEtudiantService {
    private baseURL = 'http://localhost:8083/JMLessous/CreditEtu';
    readonly API_URL = '/api/JMLessous/CreditEtu';
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    getAllCreditL():Observable<CreditEtudiant[]>{
      return this.httpClient.get<CreditEtudiant[]>(`${this.API_URL}/retrieve-all-creditImob`);
    }
  
    Simulate(Credit: CreditEtudiant):Observable<Amortissement>{
      return this.httpClient.get<Amortissement>(`${this.API_URL}/simulateur`);
    }
    tabAmortissement(credit:CreditEtudiant): Observable<Amortissement[]>{
      return this.httpClient.post<Amortissement[]>(`${this.API_URL}/tabAmor`, credit);
    }
    createCredit(Credit: CreditEtudiant,idUser:number,numCompte:number): Observable<CreditEtudiant>{
      return this.httpClient.post<CreditEtudiant>(`${this.API_URL}/add-credit/${idUser}/${numCompte}`, Credit);
    }
    getCreditByUser(idUser:number):Observable<CreditEtudiant[]>{
        return this.httpClient.get<CreditEtudiant[]>(`${this.API_URL}/retrieve-all-creditImob/${idUser}`);
      }
      createCreditconfirmer(Credit: CreditEtudiant): Observable<CreditEtudiant>{
        return this.httpClient.post<CreditEtudiant>(`${this.API_URL}/add-creditverif`, Credit);
      }
      accepter(idUser:number){
        return this.httpClient.get(`${this.API_URL}/accepter/${idUser}`);
      }
      refuser(idUser:number){
        return this.httpClient.get(`${this.API_URL}/refuser/${idUser}`);
      }
  
  
   
  
  
    
    
  }
  













