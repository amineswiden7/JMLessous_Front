import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import serviceblock from '../../../data/services.json';
import blogbox from '../../../data/blog.json';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Transaction } from 'src/app/models/transaction';
import { UserService } from 'src/app/services/user.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { CompteepargneService } from 'src/app/services/compte/compteepargne.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { TransactionValidComponent } from '../transaction-valid/transaction-validation.component';
import { CompteEpargne } from 'src/app/models/compte-epargne';
import { HttpClient } from '@angular/common/http';
import {saveAs} from 'file-saver/dist/FileSaver';
@Component({
  selector: 'app-usercompte-ep',
  templateUrl: './usercompte-ep.component.html',
  styleUrls: ['./usercompte-ep.component.css']
})
export class UsercompteEpComponent implements OnInit {
 
  numCompte !:any;
  idUser:any;
  Utilisateur:Utilisateur;
  CompteEpargne:CompteEpargne;
 
  @ViewChild('myModalClose') modalClose;
  rib : string ='' ;
  rib1:string;
  code:number=0;
  listTransaction = new Transaction();
  transaction = new Transaction();
  public blogbox: { id: number }[] = blogbox;
  public serviceblock: { id: number }[] = serviceblock;
  
 // pagination
 page: number = 1;
 constructor(private TransactionService:TransactionService
  ,private UserService:UserService
  ,private CompteepargneService:CompteepargneService
  ,private modalService: NgbModal
  ,public dialog : MatDialog
  ,private router: Router,
  private http:HttpClient,
  private route:ActivatedRoute) { }
 ngOnInit(): void {
  this.numCompte = this.route.snapshot.params['numCompte'];
  this.loadcompteE(this.numCompte);
  //Afficage transactionS
  this.idUser=10;
 // this.rib1="0192000410NAPNVKFJWT990";
 // console.log(this.rib1); 
  this.TransactionService.gettransactionsByidcpt(this.numCompte).subscribe(data => {
  this.listTransaction = data;
  },
  error => console.log(error));
  this.UserService.getUser(this.idUser).subscribe(res=>{  
    this.Utilisateur=res;
    console.log(this.Utilisateur);
  },
  error => console.log(error));

}

  loadcompteE(numCompte:any) {
    return this.CompteepargneService.getCompteE(numCompte).subscribe(
      data => {
      console.log(data);
      this.CompteEpargne=data;
    }
    )
  }


 savetransactions(){
  console.log(this.transaction);
  this.TransactionService.createtransactions(this.transaction).subscribe( data => {
    console.log(data);
  }) ;
  console.log(this.transaction);

}
apptransactions(){
  console.log(this.transaction);
  this.TransactionService.apptransaction(this.code,this.transaction).subscribe( data => {
    console.log(data);
    window.location.reload();
  }) ;
  console.log(this.transaction);
}
addtransactions(content){
  this.TransactionService.addtransaction(this.transaction).subscribe( data => {
    console.log(data);
  }) ;
  this.openVerticallyCentered(content)
  console.log(this.transaction);
}

goTotransactionsList(){
  this.router.navigate(['transactionss']);
}


onSubmit(){
  console.log(this.transaction);
  this.savetransactions();
}

verify(i:number)
{

  this.router.navigate(['transactionsbyrib',i]);
}

search(id:string)
{
  this.router.navigate(['transactionsbyrib',id]);
}
openVerticallyCentered(content: any) {
  this.modalService.open(content,{ centered: true });
}
}
