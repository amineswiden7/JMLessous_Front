import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-valid',
  templateUrl: './transaction-valid.component.html',
  styleUrls: ['./transaction-valid.component.css']
})
export class TransactionValidComponent implements OnInit {
  @ViewChild('myModalClose') modalClose;
  rib : string ='' ;
  code:number=0;
  transaction = new Transaction();
  
  constructor(private transactionsService: TransactionService, private router: Router,private modalService: NgbModal ) {
 // this.transaction={};
   }
  ngOnInit(): void {
   
  }
  savetransactions(){
    console.log(this.transaction);
    this.transactionsService.createtransactions(this.transaction).subscribe( data => {
      console.log(data);
      //this.trs={};
     // this.goTotransactionsList();
    }) ;
    console.log(this.transaction);

  }
  apptransactions(){
    console.log(this.transaction);
    this.transactionsService.apptransaction(this.code,this.transaction).subscribe( data => {
      console.log(data);
      //this.trs={};
     // this.goTotransactionsList();
    }) ;
    console.log(this.transaction);
   // this.modalClose.nativeElement.click();
  }
  addtransactions(content){
    this.transactionsService.addtransaction(this.transaction).subscribe( data => {
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
}
