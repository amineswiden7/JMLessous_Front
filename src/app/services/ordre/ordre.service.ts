import { Observable } from 'rxjs';
import { Ordre } from './../../components/models/ordre/ordre';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdreService {
  url="http://localhost:8083/JMLessous/"
  constructor(private http : HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getOrdres(id:any):Observable<Ordre[]>{
    //this.url = this.url + "getOffre/"+id;
    return this.http.get<Ordre[]>(this.url+ "getAllOrdres/"+id);
  }
}
