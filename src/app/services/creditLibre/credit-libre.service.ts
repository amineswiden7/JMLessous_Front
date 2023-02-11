import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amortissement } from 'src/app/models/amortissement';
import { CreditLibre } from 'src/app/models/credit-libre';
import { Garantie } from 'src/app/models/garantie';



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
  getAllCreditLUser(idUser:number):Observable<CreditLibre[]>{
    return this.httpClient.get<CreditLibre[]>(`${this.baseURL}ListCreditLibreUser/${idUser}`);
  }
  getAllCreditLStatus(status:any):Observable<CreditLibre[]>{
    return this.httpClient.get<CreditLibre[]>(`${this.baseURL}ListCreditLibreStatus/${status}`);
  }
  getCredit(id:any):Observable<CreditLibre>{
    return this.httpClient.get<CreditLibre>(`${this.baseURL}CreditLibreID/${id}`);
  }
  acceptCredit( id:any,status: any, credit:CreditLibre): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}AccepteCreditLibre/${id}/${status}`, credit);
  }

  Simulate(garantie:Garantie,montant:number,duree:number,salaire:number): Observable<Amortissement>{
    return this.httpClient.post<Amortissement>(`${this.baseURL}simulateur/${montant}/${duree}/${salaire}`,garantie);
  }
  tab(credit:CreditLibre,valeur:number,type:string,salaire:number): Observable<Amortissement[]>{
    return this.httpClient.post<Amortissement[]>(`${this.baseURL}tabAmortissement/${valeur}/${type}/${salaire}`, credit);
  }
  createCredit(Credit: CreditLibre,valeur:number,type:string,idUser:number,idCpt:number): Observable<Object>{
    
    return this.httpClient.post(`${this.baseURL}AddCreditLibre/${valeur}/${type}/${idUser}/${idCpt}`, Credit );
  }

 

  updateCredit( Credit: CreditLibre,id:number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}modify-CreditLibre/${id}`, Credit);
  }

  deleteCredit(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}DeleteCreditLibre/${id}`);
  }

  
  
}
