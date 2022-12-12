import { ProduitFinancier } from './../../components/models/produitFinancier/produit-financier';
import { Observable } from 'rxjs';
import { Portfeuille } from './../../components/models/portfeuille/portfeuille';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfeuilleService {
  url="http://localhost:8083/JMLessous/"
  urlp = "http://127.0.0.1:8000/PortfeuilleVar";
  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  addPortfeuille(solde:any,id:any):Observable<Portfeuille>{
    //this.url = this.url + "addOffre";
    return this.http.post<any>(
          this.url + "addPortfeuille/"+solde+"/"+id,
          //JSON.stringify(p),
          this.httpOptions
        );
  }

  getProduits(id:any):Observable<ProduitFinancier[]>{
    //this.url = this.url + "getAllOffres";
    return this.http.get<ProduitFinancier[]>(this.url+ "getProduits/"+id);
  }

  getPortfeuilleById(id:any):Observable<Portfeuille>{
    //this.url = this.url + "getOffre/"+id;
    return this.http.get<Portfeuille>(this.url+ "getPortfeuille/"+id);
  }

  getPortfeuilleByUser(id:any):Observable<Portfeuille>{
    //this.url = this.url + "getOffre/"+id;
    return this.http.get<Portfeuille>(this.url+ "getPortfeuilleByUser/"+id);
  }

  getPortfeuilleVar(id:any,CI=99,days=1):Observable<number>{
    //this.url = this.url + "getOffre/"+id;
    return this.http.get<number>(this.urlp+"/"+id+"/"+CI+"/"+days);
  }
 
}
