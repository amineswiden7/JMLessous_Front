import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import serviceblock from '../../../data/services.json';
import blogbox from '../../../data/blog.json';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Transaction } from 'src/app/models/transaction';
import { UserService } from 'src/app/services/user.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { TransactionValidComponent } from '../transaction-valid/transaction-validation.component';
import { CompteCourant } from 'src/app/models/compte-courant';
import { HttpClient } from '@angular/common/http';
import {saveAs} from 'file-saver/dist/FileSaver';
@Component({
  selector: 'app-usercompte',
  templateUrl: './usercompte.component.html',
  styleUrls: ['./usercompte.component.css']
})

export class UsercompteComponent implements OnInit {
  idUser:any;
  Utilisateur:Utilisateur;
  CompteCourant:CompteCourant;
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
  ,private modalService: NgbModal
  ,public dialog : MatDialog
  ,private router: Router,
  private http:HttpClient,
  private route:ActivatedRoute) { }
 ngOnInit(): void {
  this.idUser=1;
  
  this.rib1="0192000410JGRDSHKLU9Z40";
  console.log(this.rib1); 
  this.TransactionService.gettransactionsByRib(this.rib1).subscribe(data => {
  this.listTransaction = data;
  },
  error => console.log(error));
  
  this.UserService.getUser(this.idUser).subscribe(res=>{  
    this.Utilisateur=res;
    console.log(this.Utilisateur);
  },
  error => console.log(error));

  this.UserService.getCpt(this.idUser).subscribe(res=>{  
    this.CompteCourant=res;
    console.log(this.CompteCourant);
  },
  error => console.log(error));
 }

 savetransactions(){
  console.log(this.transaction);
  this.TransactionService.createtransactions(this.transaction).subscribe( data => {
    console.log(data);
    //this.trs={};
   // this.goTotransactionsList();
  }) ;
  console.log(this.transaction);

}
apptransactions(){
  console.log(this.transaction);
  this.TransactionService.apptransaction(this.code,this.transaction).subscribe( data => {
    console.log(data);
    window.location.reload();
    //this.trs={};
   // this.goTotransactionsList();
  }) ;
  console.log(this.transaction);
 // this.modalClose.nativeElement.click();
}
addtransactions(content){
  this.TransactionService.addtransaction(this.transaction).subscribe( data => {
    console.log(data);
    
    //this.trs={};
   // this.goTotransactionsList();
  }) ;
  this.openVerticallyCentered(content)
  console.log(this.transaction);
}
// tslint:disable-next-line:typedef
goTotransactionsList(){
  this.router.navigate(['transactionss']);
}

// tslint:disable-next-line:typedef
onSubmit(){
  console.log(this.transaction);
  this.savetransactions();
  //il faut recuperer tout l'objet passer par le form et l'envoyer vers l'autre page
 // this.router.navigate(['apptr']);
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
PDF(){
  //  alert('downalded');
    this.http.get('http://localhost:8083/JMLessous/Transaction/export/0192000410JGRDSHKLU9Z40',{responseType:'arraybuffer'}).subscribe(pdf=>{
    //pour que le doc soit .pdf  
    const blob = new Blob([pdf],{type:'application/pdf'});
      const filename = 'Relevé-Bancaire.pdf';
      saveAs(blob,filename);
    },err=>{
      console.log(err);
    });
  }
}
