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
    amortiseement=new Amortissement()
    constructor(private httpClient: HttpClient) { }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    getAllCreditL():Observable<CreditImmobilier[]>{
      return this.httpClient.get<CreditImmobilier[]>(`${this.API_URL}/retrieve-all-credit`);
    }
  
    Simulate(Credit: CreditImmobilier): Observable<Amortissement>{
      return this.httpClient.post<Amortissement>(`${this.API_URL}/simulateur`,Credit);
    }
    tabAmortissement(credit:CreditImmobilier): Observable<Amortissement[]>{
      return this.httpClient.post<Amortissement[]>(`${this.API_URL}/tabAmor`, credit);
    }
    createCredit(Credit: CreditImmobilier,idUser:number): Observable<CreditImmobilier>{
      return this.httpClient.post<CreditImmobilier>(`${this.API_URL}/add-creditImob/1`, Credit);
    }

    getAllCreditbyuser(idUser:number):Observable<CreditImmobilier[]>{
      return this.httpClient.get<CreditImmobilier[]>(`${this.API_URL}/retrieve-all-creditbyuser/${idUser}`);
    }
    getCredit(idUser:number):Observable<CreditImmobilier>{
      return this.httpClient.get<CreditImmobilier>(`${this.API_URL}/retrieve-all-credit/${idUser}`);
    }
    downloadFile() {
      return this.httpClient.get<any>(`${this.API_URL}/export/excel`,{responseType: 'arraybuffer' as 'json'});
    }
    downloaddFile(Credit: Amortissement[]) {
      return this.httpClient.get<any>(`${this.API_URL}/export`);
    }


    accepter(idUser:number){
      return this.httpClient.get(`${this.API_URL}/accepter/${idUser}`);
    }
    refuser(idUser:number){
      return this.httpClient.get(`${this.API_URL}/refuser/${idUser}`);
    }
    createCreditconfirmer(Credit: CreditImmobilier): Observable<CreditImmobilier>{
      return this.httpClient.post<CreditImmobilier>(`${this.API_URL}/add-creditveriff`, Credit);
    }


  
   
  
  
    
    
  }
  

















