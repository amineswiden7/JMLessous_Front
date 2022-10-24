import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Marketrequest} from '../../components/models/marketrequest';

@Injectable({
  providedIn: 'root'
})
export class CoursactionsService {

  constructor(private http: HttpClient) { }

  getMarkets(): Observable<Marketrequest>{
    return this.http.get<Marketrequest>('http://localhost:8083/JMLessous/Market/getAllMarkets');
  }
}
