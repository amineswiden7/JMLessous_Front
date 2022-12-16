import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Absence } from "src/app/models/absence";

@Injectable({
    providedIn: 'root'
  })
  export class AbsenceService {

    readonly API_URL = '/api/JMLessous/Absence';
    constructor(private httpClient: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      getAllAbsence():Observable<Absence[]>{
        return this.httpClient.get<Absence[]>(`${this.API_URL}/retrieve-all-Absence`);
      }
      createCredit(Credit: Absence,idUser:number): Observable<Absence>{
        return this.httpClient.post<Absence>(`${this.API_URL}/add-creditImob/1`, Credit);
      }
      getAllAbsencebyuser(idUser:number):Observable<Absence[]>{
        return this.httpClient.get<Absence[]>(`${this.API_URL}/retrieve-all-Absence/${idUser}`);
      }


  }