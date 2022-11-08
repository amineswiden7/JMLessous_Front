import { CreditImmobilier } from "src/app/models/creditImmobilier";


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amortissement } from 'src/app/models/amortissement';
import { CreditLibre } from 'src/app/models/credit-libre';

export class CreditImmobilierService {
    private baseURL = 'http://localhost:8083/JMLessous/CreditImob';
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    getAllCreditL():Observable<CreditImmobilier[]>{
      return this.httpClient.get<CreditImmobilier[]>(`${this.baseURL}retrieve-all-credit`);
    }
  
    Simulate(Credit: CreditImmobilier):Observable<Amortissement>{
      return this.httpClient.get<Amortissement>(`${this.baseURL}simulateur`);
    }
    tabAmortissement(credit:CreditImmobilier): Observable<Amortissement[]>{
      return this.httpClient.post<Amortissement[]>(`${this.baseURL}tabAmor`, credit);
    }
    createCredit(Credit: CreditImmobilier,idUser:number): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}add-creditImob/${idUser}`, Credit);
    }
  
   
  
  
    
    
  }
  

















