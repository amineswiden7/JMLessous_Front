import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private API_URL = "http://localhost:8083/JMLessous/Transaction";
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllTransactions(){
    return this.httpClient.get(`${this.API_URL}/retrieve-all-Transactions`)
  }
createtransactions( transaction: Transaction) {
    return this.httpClient.post(`${this.API_URL}/app-Transaction`, transaction); 
 }
addtransaction(transaction: Transaction): Observable<Object>{
   return this.httpClient.post(`${this.API_URL}/add-Transaction`, transaction);
 
 }
apptransaction(num: number,transaction: Transaction){
   return this.httpClient.post(`${this.API_URL}/app-TransactionAng/${num}`, transaction);
 }
gettransactionsByRib(Rib: string): Observable<Transaction>{
  return this.httpClient.get<Transaction>(`${this.API_URL}/retrieve-Transaction-by-rib/${Rib}`);
}
PDF(Rib: string){
  return this.httpClient.get(`${this.API_URL}/export/${Rib}`)
}
}
