import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Garantie } from '../models/garantie';

@Injectable({
  providedIn: 'root'
})
export class GarantieService {
  private baseURL = 'http://localhost:8083/JMLessous/';
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  createGarantie(garantie: Garantie): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}AddGarantie`, Garantie);
  }
  listGarantie():Observable<Garantie[]>{
    return this.httpClient.get<Garantie[]>(`${this.baseURL}ListGarantie`);
  }

 

  updateGarantie( garantie: Garantie,id:number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}modify-Garantie/${id}`, Garantie);
  }

  deleteGarantie(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}DeleteGarantie/${id}`);
  }
}
