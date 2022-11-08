import { CreditEtudiant } from "src/app/models/creditEtudiant";


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amortissement } from 'src/app/models/amortissement';
import { CreditLibre } from 'src/app/models/credit-libre';

export class CreditImmobilierService {
    private baseURL = 'http://localhost:8083/JMLessous/CreditEtu';
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    getAllCreditL():Observable<CreditEtudiant[]>{
      return this.httpClient.get<CreditEtudiant[]>(`${this.baseURL}retrieve-all-creditImob`);
    }
  
    Simulate(Credit: CreditEtudiant):Observable<Amortissement>{
      return this.httpClient.get<Amortissement>(`${this.baseURL}simulateur`);
    }
    tabAmortissement(credit:CreditEtudiant): Observable<Amortissement[]>{
      return this.httpClient.post<Amortissement[]>(`${this.baseURL}tabAmor`, credit);
    }
    createCredit(Credit: CreditEtudiant,idUser:number): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}add-credit/${idUser}`, Credit);
    }
    getCreditByUser(idUser:number):Observable<CreditEtudiant[]>{
        return this.httpClient.get<CreditEtudiant[]>(`${this.baseURL}retrieve-all-credit//${idUser}`);
      }
  
   
  
  
    
    
  }
  













