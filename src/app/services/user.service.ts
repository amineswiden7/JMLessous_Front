import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { CompteCourant } from '../models/compte-courant';

const API_URL = 'http://localhost:8083/JMLessous/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${API_URL}ListUser`)
  }
  getUser(id:number):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${API_URL}ListUser/${id}`)
  }
  getCpt(id:number):Observable<CompteCourant>{
    return this.http.get<CompteCourant>(`${API_URL}ListCpt/${id}`)
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}