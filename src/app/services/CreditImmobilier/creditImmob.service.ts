import { CreditImmobilier } from "src/app/models/creditImmobilier";


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amortissement } from 'src/app/models/amortissement';
import { CreditLibre } from 'src/app/models/credit-libre';
@Injectable({
    providedIn: 'root'
  })
export class CreditImmobilierService {
    private baseURL = 'http://localhost:8083/JMLessous/CreditImob';
    readonly API_URL = '/api/JMLessous/CreditImob';
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    getAllCreditL():Observable<CreditImmobilier[]>{
      return this.httpClient.get<CreditImmobilier[]>(`${this.API_URL}/retrieve-all-credit`);
    }
  
    Simulate(Credit: CreditImmobilier):Observable<Amortissement>{
      return this.httpClient.get<Amortissement>(`${this.API_URL}/simulateur`);
    }
    tabAmortissement(credit:CreditImmobilier): Observable<Amortissement[]>{
      return this.httpClient.post<Amortissement[]>(`${this.API_URL}/tabAmor`, credit);
    }
    createCredit(Credit: CreditImmobilier,idUser:number): Observable<Object>{
      return this.httpClient.post(`${this.API_URL}/add-creditImob/1`, Credit);
    }

    getAllCreditbyuser(idUser:number):Observable<CreditImmobilier[]>{
      return this.httpClient.get<CreditImmobilier[]>(`${this.API_URL}/retrieve-all-creditbyuser/${idUser}`);
    }
  
   
  
  
    
    
  }
  

















