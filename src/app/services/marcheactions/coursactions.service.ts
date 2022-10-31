import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Marketrequest} from '../../components/models/marcheactions/marketrequest';
import {Limitsrequest} from '../../components/models/marcheactions/limitsrequest';
import {Intradayrequest} from '../../components/models/marcheactions/intradayrequest';
import {Actiondetailrequest} from '../../components/models/marcheactions/actiondetailrequest';

@Injectable({
  providedIn: 'root'
})
export class CoursactionsService {

  constructor(private http: HttpClient) { }

  getMarkets(): Observable<Marketrequest>{
    return this.http.get<Marketrequest>('http://localhost:8083/JMLessous/Market/getAllMarkets');
  }

  getLimits(isin: string): Observable<Limitsrequest>{
    const url = 'http://localhost:8083/JMLessous/Market/getActionLimits/' + isin;
    return this.http.get<Limitsrequest>(url);
  }

  getIntradays(isin: string): Observable<Intradayrequest>{
    const url = 'http://localhost:8083/JMLessous/Market/getActionIntradays/' + isin;
    return this.http.get<Intradayrequest>(url);
  }

  getMarket(isin: string): Observable<Actiondetailrequest>{
    const url = 'http://localhost:8083/JMLessous/Market/getMarket/' + isin;
    return this.http.get<Actiondetailrequest>(url);
  }
}
