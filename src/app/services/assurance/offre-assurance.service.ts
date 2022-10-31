import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OffreAssurance } from 'src/app/components/models/offre-assurance';

@Injectable({
  providedIn: 'root'
})
export class OffreAssuranceService {
  url="http://localhost:8083/JMLessous/"
  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getOffresAssurance():Observable<OffreAssurance>{
    //this.url = this.url + "getAllCredits";
    return this.http.get<OffreAssurance>(this.url+ "getAllOffres");
  }

  getOffreById(id:any):Observable<OffreAssurance>{
    //this.url = this.url + "getCredit/"+id;
    return this.http.get<OffreAssurance>(this.url+ "getOffre/"+id);
  }
}
