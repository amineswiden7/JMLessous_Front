import { ProduitFinancier } from './../../components/models/produitFinancier/produit-financier';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitFinancierService {
  url="http://localhost:8083/JMLessous/"
  constructor(private http : HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /*addProduit(p:any,id:any):Observable<ProduitFinancier>{
    //this.url = this.url + "addOffre";
    return this.http.post<ProduitFinancier>(
          this.url + "addProduit/"+id,
          JSON.stringify(p),
          this.httpOptions
        );
  }*/

  addProduit(p:any,id:any,prix:number,nombre:any):Observable<ProduitFinancier>{
    //this.url = this.url + "addOffre";
    return this.http.post<ProduitFinancier>(
          this.url + "addProduit/"+id+"/"+prix+"/"+nombre,
          JSON.stringify(p),
          this.httpOptions
        );
  }

  vendreProduit(p:any,id:any,prix:number,nombre:any):any{
    return this.http.put<ProduitFinancier>(
          this.url + "vendre/"+id+"/"+prix+"/"+nombre,
          JSON.stringify(p),
          this.httpOptions
        );
  }

  getProduitById(id:any):Observable<ProduitFinancier>{
    //this.url = this.url + "getOffre/"+id;
    return this.http.get<ProduitFinancier>(this.url+ "getProduit/"+id);
  }
}
