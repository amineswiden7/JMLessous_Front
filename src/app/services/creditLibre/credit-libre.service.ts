import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amortissement } from 'src/app/models/amortissement';
import { CreditLibre } from 'src/app/models/credit-libre';



@Injectable({
  providedIn: 'root'
})
export class CreditLibreService {
  private baseURL = 'http://localhost:8083/JMLessous/';
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllCreditL():Observable<CreditLibre[]>{
    return this.httpClient.get<CreditLibre[]>(`${this.baseURL}ListCreditLibre`);
  }

  Simulate(montant:number,duree:number,interet:number): Observable<Amortissement>{
    return this.httpClient.get<Amortissement>(`${this.baseURL}simulateur/${montant}/${duree}/${interet}`);
  }
  tab(credit:CreditLibre): Observable<Amortissement[]>{
    return this.httpClient.post<Amortissement[]>(`${this.baseURL}tabAmortissement`, credit);
  }
  createCredit(Credit: CreditLibre,idUser:number,idgarantie:number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}AddCreditLibre/${idUser}/${idgarantie}`, Credit);
  }

 

  updateCredit( Credit: CreditLibre,id:number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}modify-CreditLibre/${id}`, Credit);
  }

  deleteCredit(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}DeleteCreditLibre/${id}`);
  }

  
  
}
