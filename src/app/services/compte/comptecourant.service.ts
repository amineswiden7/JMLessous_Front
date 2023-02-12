import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompteCourant } from 'src/app/models/compte-courant';

@Injectable({
  providedIn: 'root'
})
export class ComptecourantService {
  private API_URL = "http://localhost:8083/JMLessous/Compte";
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllCompteC(): Observable<CompteCourant[]>{
    return this.httpClient.get<CompteCourant[]>(`${this.API_URL}/Listaccounts`)
  }
  getC(iduser :any): Observable<CompteCourant[]> {
    return this.httpClient.get<CompteCourant[]>(`${this.API_URL}/Lista/${iduser}`);
  }
  getCompteC(id:any):Observable<CompteCourant>{
    return this.httpClient.get<CompteCourant>(`${this.API_URL}/compte/${id}`)
  }
  addCompteC(compteCourant :CompteCourant ,iduser :any): Observable<CompteCourant> {
    return this.httpClient.post<CompteCourant>(`${this.API_URL}/AddAccount/${iduser}`,compteCourant);
  }

 

  editCompteC(CompteCourant : any): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/modify-Account`, CompteCourant)
  }

  deleteCompteC(idCompteCourant : any){
    return  this.httpClient.delete(`${this.API_URL}/DeleteAccount/${idCompteCourant}`)
  }
  archiveCompteC(CompteCourant : any,cid :any){
    return  this.httpClient.put(`${this.API_URL}/archive-cpt/${cid}`, CompteCourant)
  }
 
}
