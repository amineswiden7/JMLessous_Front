import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { TokenStorageService } from './token-storage.service';
import { CompteCourant } from '../models/compte-courant';

const API_URL = 'http://localhost:8083/JMLessous/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _activeUser: Utilisateur = <Utilisateur>{};
  private headers: HttpHeaders;
  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) { }
  get activeUser(): Utilisateur {
    return this._activeUser;
  }
  
  set activeUser(user: Utilisateur) {
    this._activeUser = user;
  }
  findUserWithToken() {
    this.headers = new HttpHeaders({
      Authorization:  'Bearer ' +this.tokenStorage.getToken(),
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get<Utilisateur>("http://localhost:8083/JMLessous/findUserByToken", {
      headers: this.headers,
    }).subscribe((user:Utilisateur) => {
      this._activeUser = user
      console.log(this._activeUser);
    });
  }
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
  affecterSalaire(idUser:number,idCPT:number) {
    return this.http.get(`${API_URL}affecterSalaire/${idUser}/${idCPT}`);
  }
}