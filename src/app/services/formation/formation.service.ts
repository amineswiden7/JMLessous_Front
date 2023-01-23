import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private API_URL = "http://localhost:8083/JMLessous/Formation";
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllFormations(): Observable<Formation[]>{
    return this.httpClient.get<Formation[]>(`${this.API_URL}/retrieve-all-formation`)
  }
  getformation(idFormation:any):Observable<Formation>{
    return this.httpClient.get<Formation>(`${this.API_URL}/retrieve-formation/${idFormation}`)
  }
addFormation(formation: Formation): Observable<Object>{
   return this.httpClient.post(`${this.API_URL}/add-formation`, formation);
 }


}
